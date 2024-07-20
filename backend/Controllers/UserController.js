const userModel=require("../Models/UserModel")
var bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
// const UserModel = require("../Models/UserModel");


const register=async (req, res) => {
    const { email, password, name } = req.body;
  
    try {
      // Check if user already exists
      const existingUser = await userModel.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create new user
      const newUser = await userModel({ 
        email:email, 
        name:name, 
        password: hashedPassword 
    });
       newUser.save();
  
      const token = jwt.sign({ userId: newUser._id }, 'secretKey', { expiresIn: '1h' });
      res.json({ token });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  };

  const login=async (req, res) => {
    const { email, password } = req.body;
    
    try {
      const user = await userModel.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }
  
      const token = jwt.sign({ userId: user._id, name:user.name }, 'secretKey', { expiresIn: '1h' });
      res.json({ token, name:user.name});
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  };

  const googleLogin=async (req, res)=>{
    const {googleId, email, name, googleImage}=req.body;
    try{
        const user=await userModel.findOne({googleId:googleId});
        if(user){
          user.firstLogin=false;
          await user.save()
          res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            googleId:user.googleId,
            googleImage:user.googleImage,
            firstLogin:user.firstLogin,
            isAdmin:user.isAdmin,
            token:generateToken(user._id),
            active:user.active,
            createdAt:user.createdAt
          });
        }
        else{
          const newUser=await user.create({
            name,
            email,
            googleImage,
            googleId,
          });
          const newToken=getToken(newUser._id);
          sendVerificationEmail(newToken,newUser.email,newUser.name, newUser._id)
          res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            googleId:user.googleId,
            googleImage:user.googleImage,
            firstLogin:user.firstLogin,
            isAdmin:user.isAdmin,
            token:generateToken(user._id),
            active:user.active,
            createdAt:user.createdAt
          })
        }
    }catch(error){
      res.status(404).send("Somtheing went Wrong Please try late")
    }
}

module.exports={
    register,
    login,
    googleLogin,
}