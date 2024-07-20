var express=require("express");
var router=express.Router();

const bookControl=require("../Controllers/BookControl");

router.post("/uploadbooks", bookControl.UploadBook);;
// router.get("/displayAll", bookControl.allProductDisplay);
router.get("/fetureProductDisplay", bookControl.fetureProductDisplay);
router.get("/topsellingProductDisplay", bookControl.topsellingProductDisplay);
router.get("/trendingProductDisplay", bookControl.trendingProductDisplay);
router.get("/allBooksDisplay", bookControl.DisplayAllBooks);
router.get("/totalproduct", bookControl.allProductDisplay);

// router.post('/rent/:id', bookControl.rentBook);
// router.post('/return/:bookId', bookControl.returnBook);

module.exports = router;