const adminModel=require("../Models/AdminModel")

const Login=async(req,res)=>{
    const {name, password}= req.body;

    adminModel.findOne({name:name}).then((user)=>{

        
        if(user) {
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("The password is incorrect")
            }
        }else{
            res.json("No record existed")
        }
    })
      
};

module.exports={
    Login
}