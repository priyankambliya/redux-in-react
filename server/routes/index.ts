//ALL PACKAGES:
import express from "express"
import cors from 'cors'
//ROUTES IMPORTATION:
import {
    createUser,
    allUsers,
    deleteUserById,
    updateUserById
} from '../controllers/userController'

const router = express.Router()

router.use(cors())
router.use(express.urlencoded({extended:false}))
router.use(express.json())

router.post('/register',createUser)
router.get('/users',allUsers)
router.put('/update',updateUserById)
router.delete('/delete',deleteUserById)

export default router