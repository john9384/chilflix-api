import { BAD_REQUEST } from '../../lib/constants/http-status'
import { CustomError } from '../../lib/helpers/error'
import movieRepository from './repository'
import { ICreateMovie, IQueryMovie, IUpdateMovie } from './types/dtos'
import { IMovie } from './types/IMovie'

export const addMovie = async (formData: ICreateMovie): Promise<IMovie> => {
	const existingMovie = await movieRepository.fetchOneMovie({
		title: formData.title,
	})

	if (existingMovie) {
		throw new CustomError({
			message: 'Movie already exists',
			status: BAD_REQUEST,
		})
	}

	const newMovie = await movieRepository.createMovie(formData)

	return newMovie
}
export const updateMovie = async (
	query: IQueryMovie,
	formData: IUpdateMovie,
): Promise<IMovie | null> => {
	const movie = await movieRepository.fetchOneMovie({
		title: formData.title,
	})

	if (!movie) {
		throw new CustomError({
			message: 'No movie with specified Id',
			status: BAD_REQUEST,
		})
	}

	const updatedMovie = await movieRepository.updateMovie(query, formData)

	return updatedMovie
}

export const getMovies = async (
	query?: IQueryMovie,
): Promise<IMovie[] | null> => {
	const movies = await movieRepository.fetchMovies(query)

	return movies
}
export const getMovie = async (query: IQueryMovie) => {
	if (query.rand) {
		// 	let movie
		// 	try {
		// 		if (type === 'series') {
		// 			movie = await Movie.aggregate([
		// 				{ $match: { isSeries: true } },
		// 				{ $sample: { size: 1 } },
		// 			])
		// 		} else {
		// 			movie = await Movie.aggregate([
		// 				{ $match: { isSeries: false } },
		// 				{ $sample: { size: 1 } },
		// 			])
		// 		}
	}

	const movie = await movieRepository.fetchOneMovie(query)

	return movie
}

export const deleteMovie = async (id: string) => {
	await movieRepository.deleteMovie(id)
	return {}
}
