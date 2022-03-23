import express from "express";

const router = express.Router()

router.get("/",(req,res) =>{
    res.json({
        message : "order get"
    })
})

router.post("/",(req,res) =>{
})

router.put("/", (req,res) =>{
    res.json({
        msg : "order update"
    })
})

router.delete("/",(req, res) =>{
    res.json({
        msg : "order delete"
    })
})

export default router


