import express from "express";
import asyncHandler from "express-async-handler";
import Item from "../models/itemModel.js";
import {itemGet,
    itemGetDetail,
    itemPost,
    itemDelete,
    itemPut,
    itemDeleteDetail

} from "../controllers/itemController.js";

const router = express.Router()

// crud

// item 전체불러오는 api
router.get("/", itemGet)


// item 상세불러오기 api
router.get("/:itemId", itemGetDetail)

// item 등록해주는 api
router.post("/", itemPost)

// item 업데이트해주는 api
router.put("/:itemId", itemPut )

// item 전체삭제해주는 api
router.delete("/", itemDelete)

// item 특정삭제해주는 api
router.delete("/:itemId", itemDeleteDetail)

export default router


