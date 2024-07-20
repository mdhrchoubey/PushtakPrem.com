var express=require("express");
var router=express.Router();

const AuthControl=require("../Controllers/AdminControl");

router.post("/adminLogin", AuthControl.Login);

module.exports = router;