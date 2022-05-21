import express from 'express'
import * as movieController from './controllers'
import catchErrors from '../../lib/utils/error-boundary'
import isAuthenticatedAdmin from '../../lib/middlewares/isAuthenticatedAdmin'
import isAuthenticated from '../../lib/middlewares/authentication'

const movieRoutes = express.Router()

movieRoutes.post(
	'/',
	isAuthenticatedAdmin,
	catchErrors(movieController.addMovie),
)

movieRoutes.put(
	'/:id',
	isAuthenticatedAdmin,
	catchErrors(movieController.updateMovie),
)

movieRoutes.get(
	'/',
	isAuthenticatedAdmin,
	catchErrors(movieController.getMovies),
)

movieRoutes.get(
	'/query/:id',
	isAuthenticated,
	catchErrors(movieController.getMovieById),
)

movieRoutes.get(
	'/rand',
	isAuthenticated,
	catchErrors(movieController.getRandomMovie),
)

movieRoutes.delete(
	'/:id',
	isAuthenticatedAdmin,
	catchErrors(movieController.deleteMovie),
)

export default movieRoutes
