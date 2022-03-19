import dotenv from "dotenv"
import express from "express"
import morgan from "morgan"
import cors from "cors"
import bodyParser from "body-parser";
import connectDB from "./config/database.js"


import productRoute from "./routes/product.js"
import orderRoute from "./routes/order.js"

dotenv.config()

// 순서
// 1. morgan
// 2. nodemon
// 3. cors
// 4. bodyparser


const app = express()
// connectDB
connectDB()


// 미들웨어
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.get("/", (req, res) => {
    res.json({
        message : "hi test node"
    })
})

// route
app.use("/api/product", productRoute)
app.use("/api/order", orderRoute)





const PORT = process.env.PORT || 7000

app.listen(PORT, () => console.log("server started"))