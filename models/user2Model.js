import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        name : {
            type : String,
            required : true
        },
        email : {
            type : String,
            required : true
        },
        password : {
            type : String,
            required : true
        },
        phone : {
            type : Number,
            // required : true
        },
        bio : {
            type : String,
            // required : true
        },
        address : {
            type : String,
            // required : true
        },


    },
    {
        timestamps : true
    }
)

const User2 = mongoose.model("User2", userSchema)

export default User2