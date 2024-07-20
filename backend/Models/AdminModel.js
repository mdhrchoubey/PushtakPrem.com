const mongoose=require("mongoose");


mongoose.AdminSchema=mongoose.Schema({
    name:String,
    password:String
})

module.exports=mongoose.model("adminlogin",mongoose.AdminSchema);
