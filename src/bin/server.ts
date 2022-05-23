import http from 'http'
import cluster from 'cluster'
import os from 'os'
import mongoose from 'mongoose'
import Logger from '../lib/helpers/loggers'
import config from '../config'
import app from '../app'
import { IError } from '../lib/helpers/error'

const PORT = config.APP_PORT || 4000
const DB_URL = `mongodb+srv://${config.DB_USERNAME}:${config.DB_PASSWORD}@cluster0.qivfi.mongodb.net/${config.DB_NAME}?retryWrites=true&w=majority`

if (cluster.isPrimary) {
	const cpuCoreCount = os.cpus().length

	for (let index = 0; index < cpuCoreCount; index++) {
		// cluster.fork()
	}
	cluster.on('exit', worker => {
		Logger.warn(`Worker ${worker.id} died'`)
		Logger.warn('Starting a new one ...')
		// cluster.fork()
	})
}
mongoose
	.connect(DB_URL, {})
	.then(() => {
		Logger.info('------- Database Connected -------')
	})
	.catch((error: IError) => {
		Logger.error('------ Database Connection Failed -------')
		Logger.error(error)
	})

new http.Server(app).listen(PORT, () => {
	Logger.info(`
  -------------------------------------------
    ${config.APP_NAME?.toUpperCase()} Server listening on port ${PORT}
  -------------------------------------------
  `)
})
