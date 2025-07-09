import express from 'express'
import { getUserProfile, loginUser, logoutUser, registerUser } from '../controllers/user.controller.js'
import authMiddleware from '../middlewares/authMiddleware.js'
const router = express.Router()

router.route("/register").post(registerUser)

router.route("/login").post(loginUser)

router.route("/logout").get(logoutUser)

router.route("/profile").get(authMiddleware,getUserProfile)

export default router