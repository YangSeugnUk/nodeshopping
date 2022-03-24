import express from "express";
import Order2 from "../models/order2Model.js";
import asyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";

const router = express.Router()

// CRUD : get(select), put(update), post(create), delete(delete)

//get(select)
router.get("/", asyncHandler(async (req,res) => {
    const orders2 = await Order2.find()
    res.json({
        count: orders2.length,
        orders2
    })
}))

router.get("/:order2Id", asyncHandler( async (req, res) => {
    const {order2Id} = req.params
    console.log("order2Id", order2Id);

    const order2 = await Order2.findById(order2Id)
    console.log(order2);

    res.json(order2)
}))


//put(update)
router.put("/:orderId", asyncHandler( async (req, res) => {

    const id = req.params.orderId
    console.log(id);
    // const {orderItems,shippingAddress,
    //     paymentMethod,itemsPrice,taxPrice,
    //     shippingPrice,totalPrice,user} = req.body

    const order2 = await Order2.findById(id)
    console.log("order2", order2)

    if(order2){
        Order2.orderItems = req.body.orderItems || Order2.orderItems
        Order2.shippingAddress = req.body.shippingAddress || Order2.shippingAddress
        Order2.paymentMethod = req.body.paymentMethod || Order2.paymentMethod
        Order2.itemsPrice = req.body.itemsPrice || Order2.itemsPrice
        Order2.taxPrice = req.body.taxPrice || Order2.taxPrice
        Order2.shippingPrice = req.body.shippingPrice || Order2.shippingPrice
        Order2.totalPrice = req.body.totalPrice || Order2.totalPrice
        Order2.user = req.body.user || Order2.user

        const updateOrder = await order2.save()

        res.json({
            msg: "update order",
            order : updateOrder
        })
    }


}))

//post(create)
router.post("/", asyncHandler( async (req, res) => {
    // const {
    //     orderItems,
    //     shippingAddress,
    //     paymentMethod,
    //     itemsPrice,
    //     taxPrice,
    //     shippingPrice,
    //     totalPrice,
    //     user
    // } = req.body

    const order2 = new Order2({
        orderItems : req.body.orderItems,
        shippingAddress : req.body.shippingAddress,
        paymentMethod : req.body.paymentMethod,
        itemsPrice :req.body.itemsPrice,
        taxPrice : req.body.taxPrice,
        shippingPrice : req.body.shippingPrice,
        totalPrice : req.body.totalPrice,
        user : req.body.user
    })

    const newOrder = await order2.save();

    res.json({
        message: "create a order",
        order2 : newOrder
    })

}))

//delete(delete)
router.delete("/:order2Id", asyncHandler( async (req, res) => {
    const {order2Id} = req.params
    console.log(order2Id)
    await Order2.findByIdAndRemove(order2Id)

    res.json({
        msg: "delete at " + order2Id
    })

}))


export default router