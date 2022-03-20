import { MigrationInterface, QueryRunner } from 'typeorm'

export class Package1646948441633 implements MigrationInterface {
	async up(queryRunner: QueryRunner) {
		await queryRunner.query(`
			ALTER TABLE package
			ADD COLUMN vector tsvector
			GENERATED ALWAYS AS (
				setweight(to_tsvector('english', coalesce(name, '')), 'A')
				|| setweight(to_tsvector('english', coalesce(description, '')), 'B')
				|| setweight(to_tsvector('english', coalesce(author, '')), 'C')
				|| setweight(to_tsvector('english', coalesce(maintainer, '')), 'C')
				|| setweight(to_tsvector('english', coalesce(section, '')), 'D')
			) STORED;

			CREATE INDEX package_vector_idx ON package USING GIN (vector);
			CREATE INDEX package_tier_idx ON package (tier);
		`)
	}

	async down(queryRunner: QueryRunner) {
		await queryRunner.query(`
			DROP INDEX IF EXISTS package_vector_idx;
			DROP INDEX IF EXISTS package_tier_idx;
			ALTER TABLE package
			DROP COLUMN vector;
		`)
	}
}
