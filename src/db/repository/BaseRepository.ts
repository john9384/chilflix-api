/* eslint-disable @typescript-eslint/no-explicit-any */

class BaseRepository {
	Model: any

	constructor(Model: any) {
		this.Model = Model
	}

	async fetch<TQuery, TReturn>(query: TQuery): Promise<TReturn> {
		const entityList: TReturn = await this.Model.find(query)

		return entityList
	}

	async fetchOne<TQuery, TReturn>(query: TQuery): Promise<TReturn | null> {
		const entity = await this.Model.findOne(query)
		return entity
	}

	async create<TCreate, TReturn>(data: TCreate): Promise<TReturn> {
		const newEntity = await new this.Model(data)
		const entity = await newEntity.save()

		return entity
	}

	async update<TQuery, TUpdate, TReturn>(
		query: TQuery,
		data: TUpdate,
	): Promise<TReturn | null> {
		const updatedEntity = await this.Model.findByIdAndUpdate(
			query,
			{
				$set: data,
			},
			{ new: true },
		)

		return updatedEntity
	}

	async destroy(id?: string): Promise<boolean> {
		await this.Model.findByIdAndDelete(id)

		return true
	}
}

export default BaseRepository
