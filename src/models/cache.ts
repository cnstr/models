import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Cache {
	@PrimaryGeneratedColumn()
	// @ts-ignore
	databaseId: string

	@Column('varchar', { nullable: false })
	// @ts-ignore
	fileHash: string

	@Column('varchar', { nullable: false })
	// @ts-ignore
	repositorySlug: string
}
