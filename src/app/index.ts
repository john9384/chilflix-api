import express from 'express'
import path from 'path'
import cors from 'cors'
import morganMiddleware from '../lib/middlewares/morgan'
import routes from './routes'
import Logger from '../lib/helpers/loggers'
import { IRequest, IResponse, INext } from './types/http'
import { IError } from '../lib/helpers/error'

const app = express()

app.use(cors())
app.use(express.raw())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', express.static(path.join(__dirname, 'src/app/public')))
app.use(morganMiddleware)

app.get('/', (req, res) => {
	res.send({
		app: process.env.APP_NAME,
		message: `${process.env.APP_NAME} is running`,
		status: 200,
	})
})
app.use('/', routes)

app.get('*', (_, res) => res.send('Invalid route'))

app.use((error: IError, req: IRequest, res: IResponse, next: INext) => {
	Logger.error(error.stack)

	return res.status(error.status || 500).send({
		success: false,
		message: error.message || 'Failed',
		data: error.data || {},
		error,
	})
})

export default app
