//MONGODB CONNECTION FILE:
import './config/db'   
//ALL PACKAGES:
import express,{Express} from 'express'
//SECURE DATA:
import {SECURE_DATA} from './security/config.json'
//ROUTES IMPORTATION:
import routes from './routes/index'

const app:Express = express()

app.use(routes)

app.listen(SECURE_DATA.PORT,()=>{
    console.log(`SERVER LISTNING ON PORT:${SECURE_DATA.PORT}`)
})

