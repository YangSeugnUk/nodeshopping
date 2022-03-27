import dotenv from "dotenv"
import express from "express"
import morgan from "morgan"
import cors from "cors"
import bodyParser from "body-parser";
import connectDB from "./config/database.js"


import productRoute from "./routes/product.js"
import orderRoute from "./routes/order.js"
import itemRoute from "./routes/item.js"
import userRoute from "./routes/user.js"
import order2Route from "./routes/order2.js";
import user2Route from "./routes/user2.js";
import {notFound, errorHandler} from "./middleware/errorMiddleware.js";

dotenv.config()

// 순서
// 1. morgan -> 로깅에 도움을 주는 미들웨어. npm install morgan
// 2. nodemon -> 서버를 실행하면 코드가 바뀔떄마다 자동으로 재시작을 해준다.
//               package.json에 아래 script -> dev도 추가해야됨
//               "scripts": {
//                            "test": "echo \"Error: no test specified\" && exit 1",
//                            "dev": "nodemon server.js"
//                           },
// 3. cors  -> npm install --save cors
// 4. bodyparser
// 5. dotenv  -> 환경 변수를 파일에 저장할 수 있도록 해주는 dotenv 라이브러리 ( 키=값의 포멧 )
// 6. CRUD · Create = POST · Read = GET · Update = PUT, PATCH · Delete = DETELE.

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
app.use("/api/item", itemRoute)
app.use("/api/user", userRoute)
app.use("/api/order2", order2Route)
app.use("/api/user2", user2Route)

app.use(notFound)
app.use(errorHandler)


const PORT = process.env.PORT || 7000

app.listen(PORT, () => console.log("server started"))