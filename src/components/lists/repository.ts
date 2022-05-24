import BaseRepository from '../../db/repository/BaseRepository'
import List from './model'
import { ICreateList, IQueryList, IUpdateList } from './types/dtos'
import IList from './types/IList'

class ListRepository extends BaseRepository {
	createList = async (data: ICreateList): Promise<IList> => {
		const newList = this.create<ICreateList, IList>(data)
		return newList
	}

	updateList = async (
		query: IQueryList,
		data: IUpdateList,
	): Promise<IList | null> => {
		const updatedList = this.update<IQueryList, IUpdateList, IList>(query, data)

		return updatedList
	}

	fetchLists = async (query?: IQueryList): Promise<IList[] | null> => {
		const movieList = await this.fetch<IQueryList, IList[]>(query)

		return movieList
	}

	fetchOneList = async (query: IQueryList): Promise<IList | null> => {
		const movieList = await this.fetchOne<IQueryList, IList>(query)

		return movieList
	}

	deleteList = async (id?: string) => this.destroy(id)

	aggregate = async ({ size = 10, type, genre }: IQueryList) => {
		let list = []
		if (type && genre) {
			list = await this.Model.aggregate([
				{ $sample: { size } },
				{ $match: { type, genre } },
			])
		} else if (type) {
			list = await this.Model.aggregate([
				{ $sample: { size } },
				{ $match: { type } },
			])
		} else {
			list = await this.Model.aggregate([{ $sample: { size } }])
		}
		return list
	}
}

const listRepository = new ListRepository(List)

export default listRepository
