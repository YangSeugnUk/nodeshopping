import mongoose from "mongoose";

const itemSchema = mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    price : {
        type: Number,
        required: true,
    },
    cagegory : {
        type: String,
        default:"hi"
    },
    product : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Product"
    },
    brand : {
        type: String,
        required: true
    },
    paymentMethod : {
        type: String,
        default: "aaaaa"
    }
})

const Item = mongoose.model('Item', itemSchema)

export default Item