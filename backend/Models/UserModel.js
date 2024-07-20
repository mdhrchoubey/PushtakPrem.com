const mongoose=require("mongoose");


mongoose.userSchema=mongoose.Schema({
    name:String,
    email:String,
    password:String,
})

module.exports=mongoose.model("userlogin",mongoose.userSchema);