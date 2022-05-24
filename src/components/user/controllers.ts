import { CREATED, OK } from '../../lib/constants/http-status'
import { buildResponse } from '../../lib/utils/response-builder'
import { IRequest, IResponse } from '../../app/types/http'
import * as userService from './services'

export const updateUser = async (req: IRequest, res: IResponse) => {
	const userId = String(req.user?.id)
	const formData = req.body
	const responseData = await userService.updateUser({ _id: userId }, formData)

	return res.status(OK).send(
		buildResponse({
			success: true,
			message: 'User updated',
			data: responseData,
		}),
	)
}
export const getAllUsers = async (req: IRequest, res: IResponse) => {
	const isAdmin = Boolean(req.user?.isAdmin)
	const responseData = await userService.getUsers({}, isAdmin)

	return res.status(CREATED).send(
		buildResponse({
			success: true,
			message: 'User fetched',
			data: responseData,
		}),
	)
}

export const getCurrentUser = async (req: IRequest, res: IResponse) => {
	const userId = String(req.user?.id)
	const responseData = await userService.getUser({ _id: userId })

	return res.status(CREATED).send(
		buildResponse({
			success: true,
			message: 'User fetched',
			data: responseData,
		}),
	)
}

export const getUserById = async (req: IRequest, res: IResponse) => {
	const userId = String(req.params.id)
	const responseData = await userService.getUser({ _id: userId })

	return res.status(CREATED).send(
		buildResponse({
			success: true,
			message: 'User fetched',
			data: responseData,
		}),
	)
}

export const getUserStat = async (req: IRequest, res: IResponse) => {
	const userId = String(req.user?.id)
	const responseData = await userService.getUserStats({ _id: userId })

	return res.status(CREATED).send(
		buildResponse({
			success: true,
			message: 'User stat fetched',
			data: responseData,
		}),
	)
}

export const deleteUser = async (req: IRequest, res: IResponse) => {
	const userId = String(req.user?.id)
	const responseData = await userService.deleteUser(userId)

	return res.status(OK).send(
		buildResponse({
			success: true,
			message: 'User Deleted',
			data: responseData,
		}),
	)
}

// Todo
// Write regex for _id to match mongo object to avoid object error
