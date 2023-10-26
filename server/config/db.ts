import mongoose from "mongoose"
import {SECURE_DATA} from '../security/config.json'

const mongodbConnection = () => {
    mongoose.connect(SECURE_DATA.MONGODB.LOCAL_MONGOURL)
    .then(()=>{
        console.log(`MONGODB CONNECTED`)
    })
    .catch((error)=>{
        console.error(error)
    })
}
mongodbConnection()