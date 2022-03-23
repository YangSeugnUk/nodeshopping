import express from "express";
import asyncHandler from "express-async-handler";
import Item from "../models/itemModel.js";

const router = express.Router()

// crud

// item 전체불러오는 api
router.get("/", asyncHandler(async (req, res) => {
    const items = await Item.find()
    res.json({
        count: items.length,
        items
    })

}))


// item 상세불러오기 api
router.get("/:itemId", asyncHandler( async (req,res) => {

    const {itemId} = req.params

    const item = await Item.findById(itemId)

    res.json(item)


}))

// item 등록해주는 api
router.post("/", asyncHandler(async (req,res) => {
    const {name, price, category, product, brand, paymentMethod} = req.body

    const item = new Item({
        name,
        price,
        category,
        product,
        brand,
        paymentMethod
    })

    const newItem = await item.save();

    res.json({
        message: "create a item",
        item : newItem
    })

}))

// item 업데이트해주는 api
router.put("/:itemId", asyncHandler(async (req,res) => {

    const {itemId} = req.params
    const {name, price, category, product, brand, paymentMethod} = req.body

    const item = await Item.findById(itemId)

    if(item){
        item.name = name || item.name
        item.price = price || item.price
        item.category = category || item.category
        item.product = product || item.product
        item.brand = brand || item.brand
        item.paymentMethod = paymentMethod || item.paymentMethod

        const updateItem = await item.save()

        res.json({
            msg : "update item",
            item : updateItem
        })
    }




}))

// item 전체삭제해주는 api
router.delete("/", asyncHandler( async (req,res) => {
    await Item.remove()

    res.json({
        msg : "deleted all item"
    })

}))

// item 특정삭제해주는 api
router.delete("/:itemId", asyncHandler(async (req,res) => {
    const {itemId} = req.params
    await Item.findByIdAndRemove(itemId)

    res.json({
        msg : "delete at " + itemId
    })

}))


export default router


