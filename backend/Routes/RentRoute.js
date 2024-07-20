var express=require("express");
var router=express.Router();

const rentControl=require("../Controllers/RentController")




router.post('/rent/:id', rentControl.rentBook);
// router.post('/return/:bookId', bookControl.returnBook);

module.exports = router;