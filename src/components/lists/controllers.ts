import { CREATED, OK } from '../../lib/constants/http-status'
import { buildResponse } from '../../lib/utils/response-builder'
import * as listService from './services'
import { IRequest, IResponse } from '../../app/types/http'

export const createList = async (req: IRequest, res: IResponse) => {
	const formData = req.body

	const responseData = await listService.createList(formData)

	return res.status(CREATED).send(
		buildResponse({
			success: true,
			message: 'List added',
			data: responseData,
		}),
	)
}

export const getList = async (req: IRequest, res: IResponse) => {
	let { type, genre } = req.query
	const responseData = await listService.getList({
		type: String(type),
		genre: String(genre),
	})

	return res.status(OK).send(
		buildResponse({
			success: true,
			message: 'Lists fetched',
			data: responseData,
		}),
	)
}

export const deleteList = async (req: IRequest, res: IResponse) => {
	const listId = String(req.params.id)
	const responseData = await listService.deleteList(listId)
	return res.status(OK).send(
		buildResponse({
			success: true,
			message: 'List deleted',
			data: responseData,
		}),
	)
}
