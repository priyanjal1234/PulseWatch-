import express from 'express'
import authMiddleware from '../middlewares/authMiddleware.js'
import { createMonitor } from '../controllers/monitor.controller.js'
const router = express.Router()

router.route("/create").post(authMiddleware,createMonitor)

export default router