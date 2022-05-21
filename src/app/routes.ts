import express from 'express'
import { authRoutes } from '../components/auth'
import { userRoutes } from '../components/user'
import config from '../config'

const router = express.Router()

const { API_PREFIX } = config

router.use(`/${API_PREFIX}/auth`, authRoutes)
router.use(`/${API_PREFIX}/user`, userRoutes)

export default router
