import mongoose from "mongoose";

const productSchema = mongoose.Schema(
    {
        name : {
            type: String,
            required: true,
        },
        price : {
            type: Number,
            required: true,
        },
        brand : {
            type: String,
            required: true,
        },
        category : {
            type: String,
            required: true
        },
        description : {
            type: String,
        }
    },
    {
        timestamps : true
    }
)




const Product = mongoose.model('Product', productSchema)

export default Product