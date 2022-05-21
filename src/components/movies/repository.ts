import BaseRepository from '../../db/repository/BaseRepository'
import Movie from './model'
import { ICreateMovie, IQueryMovie, IUpdateMovie } from './types/dtos'
import { IMovie } from './types/IMovie'

class MovieRepository extends BaseRepository {
	createMovie = async (data: ICreateMovie): Promise<IMovie> => {
		const newMovie = this.create<ICreateMovie, IMovie>(data)
		return newMovie
	}

	updateMovie = async (
		query: IQueryMovie,
		data: IUpdateMovie,
	): Promise<IMovie | null> => {
		const updatedMovie = this.update<IQueryMovie, IUpdateMovie, IMovie>(
			query,
			data,
		)

		return updatedMovie
	}

	fetchMovies = async (query?: IQueryMovie): Promise<IMovie[] | null> => {
		const movieList = await this.fetch<IQueryMovie, IMovie[]>(query)

		return movieList
	}

	fetchOneMovie = async (query: IQueryMovie): Promise<IMovie | null> => {
		const movieList = await this.fetchOne<IQueryMovie, IMovie>(query)

		return movieList
	}

	deleteMovie = async (id?: string) => this.destroy(id)
}

const movieRepository = new MovieRepository(Movie)

export default movieRepository
