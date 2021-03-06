import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateJWT.js";

const userPost = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body

    // 이메일 유/무 체크
    // 패스워드 암호화


    const user = await User.findOne({ email })

    if (user) {
        // return res.status(404).json({
        //     msg: "user already existed"
        // })
        res.status(408)
        throw new Error('user already existed')

    }else{
        //프로필 이미지 생성
        // const avatar = gravatar.url(
        //     email,
        //     {
        //         s : "200",
        //         r : "pg",
        //         d : "mm",
        //         protocol : "https"
        //     }
        // )

        // // 패스워드 암호화
        // const passwordHashed = await bcrypt.hashSync(password, 10)


        const user = new User({
            name, email, password
        })

        const newUser = await user.save();

        res.json({
            message: "create a user",
            user : newUser
        })
    }



})

const userPostLogin = asyncHandler( async (req, res) => {

    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (!user) {
        // return res.status(404).json({
        //     msg :  "email is not registered"
        // })
        res.status(404)
        throw new Error('email is not registered')

    }else{
        const isMatched = await user.isValidPassword(password)
        if(!isMatched){
            // return res.status(408).json({
            //     msg : "password is not matched"
            // })
            res.status(409)
            throw new Error('password is not matched')
        }else{
            res.json({
                token : generateToken(user._id)
            })
        }



        // const isMatched = await bcrypt.compare(password, user.password)

    }
})

const userGet = asyncHandler (async (req, res) => {

    const user = await User.findById(req.user.id)
    if (user){
        res.json(user)
    }else{
        res.status(404)
        throw new Error('user not found')
    }


})

export {userPost,
    userPostLogin,
    userGet,

}