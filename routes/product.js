import express from "express"
import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";

import {
    getProducts,
    getProductById,
    createProduct,
    putProduct,
    deleteProduct,
    deleteProductDetail
} from "../controllers/productController.js";

const router = express.Router()

// crud
// 전체 product 불러오는 api
router.get("/", getProducts)

// 상세 product 불러오는 api
router.get("/:productId", getProductById)


router.post("/", createProduct )

router.put("/:productId", putProduct)

//product 전체 delete
router.delete( "/", deleteProduct)

//product 특정 delete
router.delete("/:productId", deleteProductDetail )

export default router