import asyncHandler from "express-async-handler";
import Item from "../models/itemModel.js";

const itemGet = asyncHandler(async (req, res) => {
    // const items = await Item.find()
    // res.json({
    //     count: items.length,
    //     items
    // })

})

const itemGetDetail = asyncHandler( async (req,res) => {
    //
    // const {itemId} = req.params
    //
    // const item = await Item.findById(itemId)
    //
    // res.json(item)


})

const itemPost = asyncHandler(async (req,res) => {
    const {name, price, category, product, brand, paymentMethod} = req.body
    //
    // const item = new Item({
    //     name,
    //     price,
    //     category,
    //     product,
    //     brand,
    //     paymentMethod
    // })
    //
    // const newItem = await item.save();
    //
    // res.json({
    //     message: "create a item",
    //     item : newItem
    // })

})

const itemPut = asyncHandler(async (req,res) => {

    // const {itemId} = req.params
    // const {name, price, category, product, brand, paymentMethod} = req.body
    //
    // const item = await Item.findById(itemId)
    //
    // if(item){
    //     item.name = name || item.name
    //     item.price = price || item.price
    //     item.category = category || item.category
    //     item.product = product || item.product
    //     item.brand = brand || item.brand
    //     item.paymentMethod = paymentMethod || item.paymentMethod
    //
    //     const updateItem = await item.save()
    //
    //     res.json({
    //         msg : "update item",
    //         item : updateItem
    //     })
    // }
})

const itemDelete = asyncHandler( async (req,res) => {
    // await Item.remove()
    //
    // res.json({
    //     msg : "deleted all item"
    // })

})

const itemDeleteDetail = asyncHandler(async (req,res) => {
    // const {itemId} = req.params
    // await Item.findByIdAndRemove(itemId)
    //
    // res.json({
    //     msg : "delete at " + itemId
    // })

})


export {itemGet,
    itemGetDetail,
    itemPost,
    itemPut,
    itemDelete,
    itemDeleteDetail
}