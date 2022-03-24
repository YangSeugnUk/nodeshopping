import express from "express";
import Order from "../models/orderModel.js";
import asyncHandler from "express-async-handler";

const router = express.Router()
// CRUD : get(select), put(update), post(create), delete(delete)


// get(select)
router.get("/",asyncHandler(async (req,res) =>{
    const orders = await Order.find()
    res.json({
        count: orders.length,
        orders
    })
}))

// post(create)
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


// put(update)
router.put("/:orderId",asyncHandler(async (req,res)=>{
    const id = req.params.orderId
    const {orderItems,shippingAddress,
           paymentMethod,itemsPrice,taxPrice,
        shippingPrice,totalPrice,user} = req.body

    const order = await Order.findById(id)

    if(order){
        Order.orderItems = orderItems || Order.orderItems
        Order.shippingAddress = shippingAddress || Order.shippingAddress
        Order.paymentMethod = paymentMethod || Order.paymentMethod
        Order.itemsPrice = itemsPrice || Order.itemsPrice
        Order.taxPrice = taxPrice || Order.taxPrice
        Order.shippingPrice = shippingPrice || Order.shippingPrice
        Order.totalPrice = totalPrice || Order.totalPrice
        Order.user = user || Order.user

        const updateOrder = await order.save()

        res.json({
            msg: "update order",
            order : updateOrder
        })
    }


}))


//delete(delete)
router.delete("/",asyncHandler(async (req, res) => {
    await Order.remove()

    res.json({
        msg : "delete all order"
    })
}))

router.delete("/:orderId", asyncHandler(async (req,res) => {
    const {orderId} = req.params
    await Order.findByIdAndRemove(orderId)

    res.json({
        msg: "delete at" + orderId
    })
}))

export default router


