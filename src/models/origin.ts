import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Origin {
	@PrimaryGeneratedColumn()
	// @ts-ignore
	databaseId: string

	@Column('varchar', { nullable: false })
	// @ts-ignore
	hostname: string

	@Column('varchar', { nullable: false })
	// @ts-ignore
	releasePath: string

	@Column('varchar', { nullable: false })
	// @ts-ignore
	packagesPath: string

	@Column('timestamptz', { nullable: false })
	// @ts-ignore
	lastUpdated: Date

	@Column('bool', { nullable: false })
	// @ts-ignore
	hasInRelease: boolean

	@Column('bool', { nullable: false })
	// @ts-ignore
	hasReleaseGpg: boolean

	@Column('bool', { nullable: false })
	// @ts-ignore
	supportsPaymentV1: boolean

	@Column('bool', { nullable: false })
	// @ts-ignore
	supportsPaymentV2: boolean

	@Column('bool', { nullable: false })
	// @ts-ignore
	supportsHttps: boolean
}
