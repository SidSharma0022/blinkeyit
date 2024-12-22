import mongoose, { mongo } from "mongoose";

const orderSchema = new mongoose.Schema({
    userId :[
        {
            type: mongoose.Schema.ObjectId,
            ref: 'user',
        }
    ],
    orderId :{
        type: String,
        required: [true, "Provide orderId"],
        unique :true
    },
    productId:{
        type :mongoose.Schema.ObjectId,
        ref: product
    },
    product_details:{
        name: String,
        image: Array,
    },
    payment_id :{
        type: String,
        default : null
    },
    payment_status :{
        type: String,
        default : null
    },    
    delivery_address:{
        type: mongoose.Schema.ObjectId,
        ref : 'address'
    },
    delivery_status:{
        type: String,
        default : null
    },
    subTotalAmt :{
        type :Number,
        default : null
    },
    totalAmt:{
        type :Number,
        default : null
    },
    invoice_receipt :{
        type :String,
        default : null
    }
}, {timestamps:true})

const orderModel = mongoose.Model ("order", orderSchema)
export default orderModel