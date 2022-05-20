import { Router } from 'express'
import catchErrors from '../../lib/utils/error-boundary'
import * as userController from './controllers'

const userRoutes = Router()

userRoutes.put('/:id', catchErrors(userController.updateUser))
userRoutes.get('/', catchErrors(userController.getAllUsers))
userRoutes.get('/current', catchErrors(userController.getCurrentUser))
userRoutes.get('/query/:id', catchErrors(userController.getUserById))
userRoutes.get('/stats', catchErrors(userController.getUserStat))
userRoutes.delete('/:id', catchErrors(userController.deleteUser))

export default userRoutes
