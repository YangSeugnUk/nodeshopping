import express from "express";
import {
    orderGet,
    orderPost,
    orderPut,
    orderDelete,
    orderDeleteDetail

} from "../controllers/orderController.js";
import Order from "../models/orderModel.js";


import {protect} from "../middleware/authMiddleware.js";
import asyncHandler from "express-async-handler";


const router = express.Router()
// CRUD : get(select), put(update), post(create), delete(delete)


// get(select)
router.get("/", orderGet)

router.get("/myorder",protect, asyncHandler(async (req,res) =>{

    const order = await Order.findOne({user:req.user._id})

    if (!order){
        return res.status(408).json({
            msg : "주문한내용이 없습니다.",
        })
    }else{
        res.json(order)
    }


}))


// post(create)
router.post("/",protect, orderPost)


// put(update)
router.put("/:orderId", orderPut)


//delete(delete)
router.delete("/", orderDelete)

router.delete("/:orderId", orderDeleteDetail)

export default router


