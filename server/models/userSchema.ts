//ALL PACKAGES:
import mongoose from "mongoose"
//SECURE DATA:
import {MODELS} from '../security/models.json'

//DEFINE USER SCHEMA:
const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}
},{
    timestamps: true
})

//MAKE USER MODEL:
const User = mongoose.model(MODELS.user,userSchema)
export default User
