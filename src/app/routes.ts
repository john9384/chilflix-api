import express from 'express'
import authRoutes from '../components/auth/routes'
import userRoutes from '../components/user/routes'
import movieRoutes from '../components/movies/routes'
import listRoutes from '../components/lists/routes'
import config from '../config'

const router = express.Router()

const { API_PREFIX } = config

router.use(`/${API_PREFIX}/auth`, authRoutes)
router.use(`/${API_PREFIX}/user`, userRoutes)
router.use(`/${API_PREFIX}/movie`, movieRoutes)
router.use(`/${API_PREFIX}/list`, listRoutes)

export default router
