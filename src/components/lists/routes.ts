import express from 'express'
import isAuthenticatedAdmin from '../../lib/middlewares/isAuthenticatedAdmin'
import isAuthenticated from '../../lib/middlewares/authentication'
import * as listController from './controllers'

const listRoutes = express.Router()

listRoutes.post('/', isAuthenticatedAdmin, listController.createList)
listRoutes.get('/', isAuthenticated, listController.getList)
listRoutes.delete('/:id', isAuthenticatedAdmin, listController.deleteList)

export default listRoutes
