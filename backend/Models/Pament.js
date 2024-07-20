
const mongoose = require("mongoose");


const paymentSchema= new mongoose.Schema({ 

    name:String,
    auther:String, 
    address:String,
    mobile:Number,
    city:String,
    pin: Number,
    productitems:String,
    totalproductprice:Number,
    dop:Date
})

module.exports = mongoose.model("Payment", paymentSchema);