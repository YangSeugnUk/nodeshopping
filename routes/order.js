import express from "express";
import Order from "../models/orderModel.js";
import asyncHandler from "express-async-handler";

const router = express.Router()

router.get("/",asyncHandler(async (req,res) =>{
    const orders = await Order.find()
    res.json({
        count: orders.length,
        orders
    })
}))

router.post("/",asyncHandler( async (req,res) =>{
    const {
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        user
    } = req.body

    const order = new Order({
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        user
    })

    const newOrder = await order.save();

    res.json({
        message: "create a order",
        order : newOrder
    })


}))

router.put("/", asyncHandler(async (req,res) =>{
    res.json({
        msg : "order update"
    })
}))

router.delete("/",(req, res) =>{
    res.json({
        msg : "order delete"
    })
})

export default router


