//ALL PACKAGES:
import express from "express"
//ROUTES IMPORTATION:
import {
    createUser
} from '../controllers/userController'

const router = express.Router()

router.post('/register',createUser)

export default router