import express from "express"
import dotenv from "dotenv"
import { personRoutes } from "./src/infra/routes/person.routes"
import { systemRoutes } from "./src/infra/routes/system.routes"
import { deployRoutes } from "./src/infra/routes/deploy.routes"
import { errorHandler } from "./src/middlewares/exception"

dotenv.config()

const app = express()

app.use(express.json())

app.use(personRoutes)
app.use(systemRoutes)
app.use(deployRoutes)

app.use(errorHandler);

const port = Number(process.env.PORT) || 3000

app.listen(port, () => {
    console.log(`Aplicação rodando na porta ${port}`)
})