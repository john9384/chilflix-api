import { IRequest, IResponse } from '../../app/types/http'
import { CREATED, OK } from '../../lib/constants/http-status'
import { buildResponse } from '../../lib/utils/response-builder'
import * as authService from './services'

export const register = async (req: IRequest, res: IResponse) => {
	const formData = req.body

	const responseData = await authService.register(formData)

	return res.status(CREATED).send(
		buildResponse({
			success: true,
			message: 'User signup',
			data: responseData,
		}),
	)
}

export const login = async (req: IRequest, res: IResponse) => {
	const formData = req.body

	const responseData = await authService.login(formData)

	return res.status(OK).send(
		buildResponse({
			success: true,
			message: 'User logged in',
			data: responseData,
		}),
	)
}
