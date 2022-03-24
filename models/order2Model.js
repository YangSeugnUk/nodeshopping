import mongoose from "mongoose";

const order2Schema = mongoose.Schema(
    {
        user : {
            type: mongoose.Schema.Types.ObjectId,
            ref : "User"
        },
        orderItems : [
            {
                name: {
                    type: String,
                    required: true,
                },
                qty: {
                    type: Number,
                    required: true,
                },
                price:{
                    type: Number,
                    required: true,
                },
                product:{
                    type: mongoose.Schema.Types.ObjectId,
                    required:true,
                    ref:"Product"
                }
            }
        ],
        shippingAddress : {
            address:{
                type: String,
                required: true,
            },
            city:{
                type: String,
                required: true,
            },
            postalCode:{
                type: String,
                required: true,
            },
            country:{
                type: String,
                required: true,
            }
        },
        paymentMethod : {
            type: String,
            required: true
        },
        paymentResult : {},
        taxPrice : {
            type: Number,
            required: true
        },
        shippingPrice : {
            type: Number,
            required: true
        },
        totalPrice : {
            type: Number,
            required: true
        },
        isPaid : {
            type:Date,
        },
        paidAt : {
            type:Boolean,
            required: true,
            default:false
        },
        isDelivery : {
            type: Date
        }
    },
    {
        timestamps : true
    }
)

const Order2 = mongoose.model('Order2', order2Schema)

export default Order2