import express from "express";
import asyncHandler from "express-async-handler";
import User2 from "../models/user2Model.js";
import bcrypt from "bcryptjs";

const router = express.Router()

router.get("/", asyncHandler( async (req, res) => {


}))

router.put("/", asyncHandler( async (req, res) => {

}))

//회원가입
router.post("/signup", asyncHandler( async (req, res) => {
    const { name, email, password } = req.body

    const user2 = await User2.findOne({ email : req.body.email })
    console.log("user2Status", user2);

    if ( user2 ){
        return res.status(404).json({
            msg: "user2 already existed"
        })
    }else{
        const passwordHashed = await bcrypt.hashSync(req.body.password, 10)

        const user2 = new User2({
            name: req.body.name,
            email: req.body.email,
            password : passwordHashed
        })
        console.log("3333")
        console.log("user2", user2)

        const newUser = await user2.save();
        console.log("4444")

        res.json({
            message: "create a user2",
            user : newUser
        })
    }

}))

router.delete("/", asyncHandler( async (req, res) => {

}))

export default router