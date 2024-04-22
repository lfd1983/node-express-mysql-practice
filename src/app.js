import express from "express"
import morgan from "morgan"
import languageRoutes from "./routes/language.route"

const app = express()

//Settings
app.set("port", 4000)

//Middleware
app.use(morgan("dev"))
app.use(express.json())
app.use("/api/languages",languageRoutes)


export default app