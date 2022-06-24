import { Repository } from './repository'
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Package {
	@PrimaryGeneratedColumn()
	// @ts-ignore
	databaseId: string

	@Column('varchar', { nullable: false })
	// @ts-ignore
	package: string

	@Column('bool', { nullable: false })
	@Index('package_current_idx')
	// @ts-ignore
	isCurrent: boolean

	@Column('bool', { nullable: false })
	@Index('package_current_idx')
	// @ts-ignore
	isPruned: boolean

	@ManyToOne(() => Repository, repo => repo.slug, { nullable: false })
	@JoinColumn({ name: 'repositorySlug' })
	// @ts-ignore
	repository: Repository

	@Column('varchar', { name: 'repositorySlug', nullable: true })
	// @ts-ignore
	repositorySlug: string

	@Column('varchar', { nullable: false })
	// @ts-ignore
	price: string

	@Column('smallint', { nullable: false })
	@Index('package_tier_idx')
	// @ts-ignore
	tier: number

	@Column('varchar', { nullable: false })
	// @ts-ignore
	version: string

	@Column('varchar', { nullable: false })
	// @ts-ignore
	architecture: string

	@Column('varchar', { nullable: false })
	// @ts-ignore
	filename: string

	@Column('bigint', { nullable: false })
	// @ts-ignore
	size: number

	@Column('text', { nullable: true })
	sha256?: string

	@Column('text', { nullable: true })
	name?: string

	@Column('text', { nullable: true })
	description?: string

	@Column('text', { nullable: true })
	author?: string

	@Column('text', { nullable: true })
	maintainer?: string

	@Column('text', { nullable: true })
	depiction?: string

	@Column('text', { nullable: true })
	nativeDepiction?: string

	@Column('text', { nullable: true })
	sileoDepiction?: string

	@Column('text', { nullable: true })
	header?: string

	@Column('text', { nullable: true })
	tintColor?: string

	@Column('text', { nullable: true })
	icon?: string

	@Column('text', { nullable: true })
	section?: string

	@Column('varchar', { array: true, nullable: true, default: [] })
	tag?: string[]

	@Column('bigint', { nullable: true })
	installedSize?: number
}
