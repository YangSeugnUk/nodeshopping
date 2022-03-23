import express from "express"
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs"

const router = express.Router()


// 회원가입
router.post("/signup", asyncHandler(async (req, res) => {
    const { name, email, password } = req.body

    // 이메일 유/무 체크
    // 패스워드 암호화


    const user = await User.findOne({ email })

    if (user) {
        return res.status(404).json({
            msg: "user already existed"
        })

    }else{

        // 패스워드 암호화
        const passwordHashed = await bcrypt.hashSync(password, 10)


        const user = new User({
            name, email, password: passwordHashed
        })

        const newUser = await user.save();

        res.json({
            message: "create a user",
            user : newUser
        })
    }



}))

// 로그인
router.post("/login", asyncHandler( async (req, res) => {

    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (!user) {
        return res.status(404).json({
            msg :  "email is not registered"
        })
    }else{
       const isMatched = await bcrypt.compare(password, user.password)
        if(!isMatched){
            return res.status(408).json({
                msg : "password is not matched"
            })
        }else{
            res.json(user)
        }
    }



}))


// 프로필 불러오기
router.get("/", (req, res) => {
    res.json({
        message:"user get"
    })
})

export default router