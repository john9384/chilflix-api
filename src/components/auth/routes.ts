import express from 'express'
import * as authController from './controllers'
import catchErrors from '../../lib/utils/error-boundary'

const authRoutes = express.Router()

authRoutes.post('/register', catchErrors(authController.register))
authRoutes.post('/login', catchErrors(authController.login))

export default authRoutes
