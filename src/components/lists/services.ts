import { ICreateList, IQueryList } from './types/dtos'
import IList from './types/IList'
import listRepository from './repository'
import { CustomError } from '../../lib/helpers/error'
import { BAD_REQUEST } from '../../lib/constants/http-status'

export const createList = async (formData: ICreateList): Promise<IList> => {
	const existingList = await listRepository.fetchOneList({
		title: formData.title,
	})

	if (existingList) {
		throw new CustomError({
			message: 'List already exists',
			status: BAD_REQUEST,
		})
	}

	const newList = await listRepository.createList(formData)

	return newList
}

export const deleteList = async (id: string) => {
	await listRepository.deleteList(id)
	return {}
}

export const getList = async (query: IQueryList): Promise<IList | null> => {
	const typeQuery = query.type
	const genreQuery = query.genre
	// 	let list = []
	// 	try {
	// 		if (typeQuery) {
	// 			if (genreQuery) {
	// 				list = await List.aggregate([
	// 					{ $sample: { size: 10 } },
	// 					{ $match: { type: typeQuery, genre: genreQuery } },
	// 				])
	// 			} else {
	// 				list = await List.aggregate([
	// 					{ $sample: { size: 10 } },
	// 					{ $match: { type: typeQuery } },
	// 				])
	// 			}
	// 		} else {
	// 			list = await List.aggregate([{ $sample: { size: 10 } }])
	// 		}

	return {}
}
