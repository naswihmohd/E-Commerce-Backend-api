const mongoose=require('mongoose')

const orderSchema = mongoose.Schema({
    user:{
        type:String,
        required:true
    },
    product:{
        type:Number,
        require:true
    },
    quantity:{
        type:Number,
        default:1
    }
})

const orderModel=mongoose.model('orders',orderSchema)
module.exports=orderModel