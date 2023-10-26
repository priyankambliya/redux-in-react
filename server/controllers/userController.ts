//ALL PACKAGES:
import { Request, Response } from "express"
//MODELS:
import User from "../models/userSchema"
//ROUTES IMPORTATION:
import { successResponseHandler,errorResponseHandler } from "../handlers/responseHandlers"

//REGISTER USER:
const createUser=async(request:Request,response:Response)=>{
    const {
        name,
        email,
        password
    } = request.body

    try {
        const userData = {
            name,
            email,
            password
        }
        await User.create(userData)
        successResponseHandler(response,{message:'user created'},201)
    } catch (error) {
        errorResponseHandler(response,error,400)
    }
}

export {
    createUser
}
