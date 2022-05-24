import { Router } from 'express'
import catchErrors from '../../lib/utils/error-boundary'
import * as userController from './controllers'
import isAuthenticated from '../../lib/middlewares/authentication'
import isAuthenticatedAdmin from '../../lib/middlewares/isAuthenticatedAdmin'

const userRoutes = Router()

userRoutes.put('/', isAuthenticated, catchErrors(userController.updateUser))
userRoutes.get(
	'/',
	isAuthenticatedAdmin,
	catchErrors(userController.getAllUsers),
)
userRoutes.get(
	'/current',
	isAuthenticated,
	catchErrors(userController.getCurrentUser),
)
userRoutes.get(
	'/query/:id',
	isAuthenticated,
	catchErrors(userController.getUserById),
)
userRoutes.get(
	'/stats',
	isAuthenticated,
	catchErrors(userController.getUserStat),
)
userRoutes.delete(
	'/:id',
	isAuthenticated,
	catchErrors(userController.deleteUser),
)

export default userRoutes
