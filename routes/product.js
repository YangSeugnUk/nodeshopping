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
        products: products.map(product => {
            return {
                id: product._id,
                name: product.name,
                price: product.price,
            }
        })
    })
}))

// 상세 product 불러오는 api
router.get("/:productId", asyncHandler(async (req,res) => {

    const {productId} = req.params
    // const id = req.params.productId

    const product = await Product.findById(productId)

    res.json({
        id:product._id,
        name:product.name,
        price:product.price,
        brand:product.brand,
        category:product.category,
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

    const {name, price, brand, category, description} = req.body

    const product = new Product({
        name,
        price,
        brand,
        category,
        description,
    })

    const newProduct =  await product.save()

    res.json({
        message : "created a product",
        product : newProduct
    })


}))

router.put("/:productId",asyncHandler(async (req, res) =>{

    const id = req.params.productId

    const {name, price, brand, category, description} = req.body

    const product = await Product.findById(id)

    if (product) {
        product.name = name || product.name
        product.price = price || product.price
        product.brand = brand || product.brand
        product.category = category || product.category
        product.description = description || product.description

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

    const {productId} = req.params
    // const id = req.params.productId
    await Product.findByIdAndRemove(productId)

    res.json({
        msg : "deleted at "+ productId
    })

}))

export default router