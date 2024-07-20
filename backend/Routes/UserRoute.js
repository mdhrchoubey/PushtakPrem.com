var express=require("express");
var router=express.Router();

const userController=require("../Controllers/UserController");



router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/googleLogin", userController.googleLogin)

module.exports = router;