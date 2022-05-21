import { IRequest, IResponse } from '../../app/types/http'
import { CREATED, OK } from '../../lib/constants/http-status'
import { buildResponse } from '../../lib/utils/response-builder'
import * as movieService from './services'

export const addMovie = async (req: IRequest, res: IResponse) => {
	const formData = req.body

	const responseData = await movieService.addMovie(formData)

	return res.status(CREATED).send(
		buildResponse({
			success: true,
			message: 'Movie added',
			data: responseData,
		}),
	)
}

export const updateMovie = async (req: IRequest, res: IResponse) => {
	const movieId = String(req.params.id)
	const formData = req.body
	const responseData = await movieService.updateMovie({ id: movieId }, formData)

	return res.status(OK).send(
		buildResponse({
			success: true,
			message: 'Movie updated',
			data: responseData,
		}),
	)
}

export const getMovies = async (req: IRequest, res: IResponse) => {
	const responseData = await movieService.getMovies()

	return res.status(OK).send(
		buildResponse({
			success: true,
			message: 'Movies fetched',
			data: responseData,
		}),
	)
}

export const getMovieById = async (req: IRequest, res: IResponse) => {
	const movieId = req.params.id
	const responseData = await movieService.getMovie({ id: movieId })

	return res.status(OK).send(
		buildResponse({
			success: true,
			message: 'Movie fetched',
			data: responseData,
		}),
	)
}

export const getRandomMovie = async (req: IRequest, res: IResponse) => {
	const type = String(req.query.type)
	const responseData = await movieService.getMovie({ rand: true, type })

	return res.status(OK).send(
		buildResponse({
			success: true,
			message: 'Movie Fetched',
			data: responseData,
		}),
	)
}

export const deleteMovie = async (req: IRequest, res: IResponse) => {
	const movieId = String(req.params.id)
	const responseData = await movieService.deleteMovie({ id: movieId })
	return res.status(OK).send(
		buildResponse({
			success: true,
			message: 'Movie deleted',
			data: responseData,
		}),
	)
}
