import { MigrationInterface, QueryRunner } from 'typeorm'

export class Repository1646948440633 implements MigrationInterface {
	async up(queryRunner: QueryRunner) {
		await queryRunner.query(`
			ALTER TABLE repository
			ADD COLUMN vector tsvector
			GENERATED ALWAYS AS (
				setweight(to_tsvector('english', slug), 'A')
				|| setweight(array_to_tsvector(aliases), 'B')
				|| setweight(to_tsvector('english', coalesce(name, '')), 'C')
				|| setweight(to_tsvector('english', coalesce(description, '')), 'D')
			) STORED;

			CREATE INDEX repository_vector_idx ON repository USING GIN (vector);
		`)
	}

	async down(queryRunner: QueryRunner) {
		await queryRunner.query(`
			DROP INDEX IF EXISTS repository_vector_idx;
			ALTER TABLE repository
			DROP COLUMN vector;
		`)
	}
}
