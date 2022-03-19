import express from "express"
import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";

const router = express.Router()

// crud
// 전체 product 불러오는 api
router.get("/", asyncHandler (async (req, res) => {
   const products = await Product.find()
    res.json({
        count: products.length,
        products: products
    })
}))

// 상세 product 불러오는 api
router.get("/:productId", asyncHandler(async (req,res) => {

    const id = req.params.productId

    const product = await Product.findById(id)

    res.json(product)

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

router.put("/:productId",asyncHandler(async (req, res) =>{

    const id = req.params.productId
    const product = await Product.findById(id)

    if (product) {
        product.name = req.body.name || product.name
        product.price = req.body.price || product.price
        product.brand = req.body.brand || product.brand
        product.category = req.body.category || product.category
        product.description = req.body.description || product.description

        const updatedProduct = await product.save()

        res.json({
            msg : "updated product",
            product : updatedProduct
        })

    }



}))

//product 전체 delete
router.delete( "/",asyncHandler(async (req,res) => {

   await Product.remove()

    res.json({
        msg : "deleted all product  "
    })
}))

//product 특정 delete
router.delete("/:productId", asyncHandler(async (req,res) => {

    const id = req.params.productId
    await Product.findByIdAndRemove(id)

    res.json({
        msg : "deleted at "+ id
    })

}))

export default router