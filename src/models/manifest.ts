import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

// Types are defined by the manifest generator
enum ManifestType {
	UnsafeRepo = 'unsafe-repo',
	ScamJailbreak = 'scam-jailbreak',
	ScamUnlock = 'scam-unlock'
}

@Entity()
export class Manifest {
	@PrimaryGeneratedColumn()
	// @ts-ignore
	databaseId: string

	@Column('varchar', { nullable: false })
	// @ts-ignore
	url: string

	@Column('varchar', { nullable: false })
	// @ts-ignore
	type: ManifestType
}
