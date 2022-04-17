import asyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";

const orderGet = asyncHandler(async (req,res) =>{
    const orders = await Order.find()
    res.json({
        count: orders.length,
        orders
    })
})

const orderPost = asyncHandler( async (req,res) =>{
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
})

const orderPut = asyncHandler(async (req,res)=>{
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


})

const orderDelete = asyncHandler(async (req, res) => {
    await Order.remove()

    res.json({
        msg : "delete all order"
    })
})

const orderDeleteDetail = asyncHandler(async (req,res) => {
    const {orderId} = req.params
    await Order.findByIdAndRemove(orderId)

    res.json({
        msg: "delete at" + orderId
    })
})

export {orderGet,
    orderPost,
    orderPut,
    orderDelete,
    orderDeleteDetail
}