import "reflect-metadata";
import express, { NextFunction, Request, Response} from "express"
import "express-async-errors"
import swaggerUi from "swagger-ui-express"

import "./shared/container"

import { router } from "./routes"
import swaggerFile from "./swagger.json"
import { AppError } from "./errors/AppError"

const app = express()

const cors = require("cors")

app.use(express.json())
app.use(cors())

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(router)

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof AppError){
        return response.status(err.statusCode).json({
            message: err.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`
    })
})

app.listen(process.env.PORT, () => console.log("Server is running!"))