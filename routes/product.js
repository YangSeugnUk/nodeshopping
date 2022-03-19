import express from "express"
import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";

const router = express.Router()

// crud

router.get("/", asyncHandler (async (req, res) =>{
   const products = await Product.find()
    res.json({
        count: products.length,
        products: products
    })
}))

router.post("/", asyncHandler (async (req, res) =>{

    // const userInput = {
    //     name : req.body.name,
    //     price : req.body.price,
    //     desc : req.body.description
    // }
    //
    // res.json({
    //     msg : "product create",
    //     newProduct : userInput
    // })

    const product = new Product({
        name : req.body.name,
        price : req.body.price,
        brand : req.body.brand,
        category : req.body.category,
        description : req.body.description,
    })

    const newProduct =  await product.save()

    res.json({
        message : "created a product",
        product : newProduct
    })


}))

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