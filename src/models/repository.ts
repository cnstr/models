import { Column, Entity, Index, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm'
import { Origin } from './origin'

@Entity()
export class Repository {
	@PrimaryColumn('varchar', { nullable: false, unique: true })
	// @ts-ignore
	slug: string

	@Column('varchar', { array: true, nullable: false, default: [] })
	// @ts-ignore
	aliases: string[]

	@Column('smallint', { nullable: false })
	// @ts-ignore
	tier: number

	@Column('int', { nullable: true })
	// @ts-ignore
	packageCount: number

	@Column('varchar', { array: true, nullable: true, default: [] })
	// @ts-ignore
	sections: string[]

	@Column('varchar', { nullable: false })
	// @ts-ignore
	uri: string

	@Column('varchar', { nullable: false, default: './' })
	// @ts-ignore
	suite: string

	@Column('varchar', { nullable: true })
	component?: string

	@Column('text', { nullable: true })
	name?: string

	@Column('text', { nullable: true })
	version?: string

	@Column('text', { nullable: true })
	description?: string

	@Column('timestamptz', { nullable: true })
	date?: Date

	@Column('text', { nullable: true })
	paymentGateway?: string

	@Column('text', { nullable: true })
	sileoEndpoint?: string

	@Column('bool', { nullable: false })
	@Index('package_current_idx')
	// @ts-ignore
	isPruned: boolean

	@OneToOne(() => Origin, origin => origin.databaseId, { nullable: false })
	@JoinColumn({ name: 'originId' })
	// @ts-ignore
	repository: Repository
}
