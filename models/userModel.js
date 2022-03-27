import mongoose from "mongoose";
import gravatar from "gravatar";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
    {
        name : {
            type: String,
            required: true
        },
        email :{
            type: String,
            required: true
        },
        password :{
            type: String,
            required: true
        },
        phone: {
            type: Number,
            // required: true
        },
        bio: {
            type: String,
            // required: true
        },
        address: {
            type: String,
            // required: true
        },
        profileImage: {
            type: String,
        }
    },
    {
        timestamps : true
    }
)

userSchema.pre("save", async function  (next) {
    try {
        // 프로필생성
    //    패드워드 암호화
        const avatar = await gravatar.url(
            this.email,
            {
                s : "200",
                r : "pg",
                d : "mm",
                protocol : "https"
            }
        )
        this.profileImage = avatar
        const hashedPassword = await bcrypt.hash(this.password, 10)
        this.password = hashedPassword
        next()


    }catch (error){
        next(error)
    }
})

userSchema.methods.isValidPassword =  function (inputPassword){
    try {
        return  bcrypt.compare(inputPassword, this.password)
    }catch (error){
        throw new Error(error)
    }
}

const User = mongoose.model("User", userSchema)



export default User