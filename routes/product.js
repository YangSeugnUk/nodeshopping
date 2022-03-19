import express from "express"

const router = express.Router()

// crud

router.get("/", (req, res) =>{
    res.json({
        message : "product get"
    })
})

router.post("/", (req, res) =>{

    const userInput = {
        name : req.body.name,
        price : req.body.price,
        desc : req.body.description
    }

    res.json({
        msg : "product create",
        newProduct : userInput
    })
})

router.put("/",(req, res) =>{
    res.json({
        msg : "product update"
    })
})

router.delete("/",(req,res) => {
    res.json({
        msg : "product delete"
    })
})


export default router