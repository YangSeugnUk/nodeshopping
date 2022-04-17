import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";


const getProducts = asyncHandler (async (req, res) => {
    const products = await Product.find()
    res.json({
        count: products.length,
        // products: products.map(product => {
        //     return {
        //         id: product._id,
        //         name: product.name,
        //         price: product.price,
        //     }
        // })
        products
    })
})

const getProductById = asyncHandler(async (req,res) => {

    const {productId} = req.params
    // const id = req.params.productId

    const product = await Product.findById(productId)

    if (product){
        res.json({
            id:product._id,
            name:product.name,
            price:product.price,
            brand:product.brand,
            category:product.category,
        })
    }else{
        res.status(404)
        throw new Error('Product not found')
    }

})

const createProduct = asyncHandler (async (req, res) =>{

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


})

const putProduct = asyncHandler(async (req, res) =>{

    const {productId} = req.params

    const {name, price, brand, category, description} = req.body

    const product = await Product.findById(productId)

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

    }else{
        res.status(404)
        throw new Error('Product not Found')
    }



})

const deleteProduct = asyncHandler(async (req,res) => {

    await Product.remove()

    res.json({
        msg : "deleted all product"
    })
})

const deleteProductDetail = asyncHandler(async (req,res) => {

    const {productId} = req.params
    // const id = req.params.productId
    await Product.findByIdAndRemove(productId)

    res.json({
        msg : "deleted at "+ productId
    })

})


export { getProducts,
         getProductById,
         createProduct,
         putProduct,
         deleteProduct,
         deleteProductDetail }