import express from 'express'
import { AppDataSource } from './database';
import "express-async-errors";
import { router } from './routes';
import { appErrorMiddleware } from './middleware/appErrorMiddleware';


const app = express()
const cors = require("cors")

app.use(cors())
app.use(express.json())

app.use(router)

app.use(appErrorMiddleware)

AppDataSource.initialize()
    .then(() => {
        console.log("DB test initialized")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })


app.listen( process.env.PORT || 9000,() => console.log("rodando liso"))

export default app

