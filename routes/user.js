import express from "express"
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateJWT.js";
import {protect} from "../middleware/authMiddleware.js";
import {userPost,
        userPostLogin,
        userGet,


} from "../controllers/userController.js";

const router = express.Router()


// 회원가입
router.post("/signup", userPost)

// 로그인
router.post("/login", userPostLogin)


// 프로필 불러오기
router.get("/", protect, userGet)

export default router