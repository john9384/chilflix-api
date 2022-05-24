import express from 'express'
import isAuthenticatedAdmin from '../../lib/middlewares/isAuthenticatedAdmin'
import isAuthenticated from '../../lib/middlewares/authentication'
import * as listController from './controllers'
import catchErrors from '../../lib/utils/error-boundary'

const listRoutes = express.Router()

listRoutes.post(
	'/',
	isAuthenticatedAdmin,
	catchErrors(listController.createList),
)
listRoutes.get('/', isAuthenticated, catchErrors(listController.getList))
listRoutes.delete(
	'/:id',
	isAuthenticatedAdmin,
	catchErrors(listController.deleteList),
)

export default listRoutes
