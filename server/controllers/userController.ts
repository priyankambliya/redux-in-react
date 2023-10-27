//ALL PACKAGES:
import { Request, Response } from "express"
import * as bcrypt from 'bcrypt'
//MODELS:
import User from "../models/userSchema"
//ROUTES IMPORTATION:
import { successResponseHandler,errorResponseHandler } from "../handlers/responseHandlers"
//SECURE DATA:
import {SECURE_DATA} from '../security/config.json'

//REGISTER USER:
const createUser=async(request:Request,response:Response)=>{
    const {
        name,
        email,
        password
    } = request.body

    const hasedPassword = await bcrypt.hash(password,SECURE_DATA.ENCRYPT.PASSWORD_SALT)

    try {
        const userData = {
            name,
            email,
            password:hasedPassword
        }
        await User.create(userData)
        successResponseHandler(response,{message:'user created'},201)
    } catch (error) {
        errorResponseHandler(response,error,400)
    }
}

const allUsers = async(request:Request,response:Response)=>{
    try {
        const users = await User.find()
        successResponseHandler(response,users,200)
    } catch (error) {
        errorResponseHandler(response,error,401)
    }
}

const deleteUserById = async(request:Request,response:Response) => {
    try {
        const id = request.query.id
        await User.findByIdAndDelete(id)
        successResponseHandler(response,{message:"user deleted"},200)
    } catch (error) {
        errorResponseHandler(response,error,401)
    }
}

const updateUserById = async(request:Request,response:Response) => {
    try {
        const {
            name,email
        } = request.body
        // const hasedPassword = await bcrypt.hash(password,SECURE_DATA.ENCRYPT.PASSWORD_SALT)
        const id = request.query.id
        await User.findByIdAndUpdate(id,{
            name,
            email
        })
        successResponseHandler(response,{message:"user updated"},200)
    } catch (error) {
        errorResponseHandler(response,error,401)
    }
}

export {
    createUser,
    allUsers,
    deleteUserById,
    updateUserById
}
