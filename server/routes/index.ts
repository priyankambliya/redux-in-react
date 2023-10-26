//ALL PACKAGES:
import express from "express"
import cors from 'cors'
//ROUTES IMPORTATION:
import {
    createUser
} from '../controllers/userController'

const router = express.Router()

router.use(cors())
router.use(express.urlencoded({extended:false}))
router.use(express.json())

router.post('/register',createUser)

export default router