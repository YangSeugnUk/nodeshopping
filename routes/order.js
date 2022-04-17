import express from "express";
import Order from "../models/orderModel.js";
import asyncHandler from "express-async-handler";
import {
    orderGet,
    orderPost,
    orderPut,
    orderDelete,
    orderDeleteDetail

} from "../controllers/orderController.js";

const router = express.Router()
// CRUD : get(select), put(update), post(create), delete(delete)


// get(select)
router.get("/", orderGet)

// post(create)
router.post("/",orderPost)


// put(update)
router.put("/:orderId", orderPut)


//delete(delete)
router.delete("/", orderDelete)

router.delete("/:orderId", orderDeleteDetail)

export default router


