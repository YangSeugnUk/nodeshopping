import express from "express"

const app = express()

app.get("/", (req, res) => {
    res.json({
        message : "hi test node"
    })
})

const PORT = 9000

app.listen(PORT, () => console.log("server started"))