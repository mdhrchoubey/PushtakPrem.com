const bookModel=require("../Models/BookModel")
const usermodel=require("../Models/UserModel")

const UploadBook=async(req,res)=>{
     let {pname, authname, category, tags, price,imgpath}= req.body;
     
    const Product= await bookModel.create({

        name:pname,
        auther:authname, 
        category:category,
        tags:tags,
        price: price,
        image:imgpath
    })

    res.send("Data save!!!");  
}
const fetureProductDisplay=async(req, res)=>{
 
    const response= await bookModel.find({tags:"bestSci"}).sort({_id:-1}).limit(4);

   res.status(200).json({product:response});
    
}

const  topsellingProductDisplay=async(req, res)=>{
 
    const response= await bookModel.find({tags:"topselling"}).sort({_id:-1}).limit(4);

   res.status(200).json({product:response});
    
}

const  trendingProductDisplay=async(req, res)=>{
    const response= await bookModel.find({tags:"trending"}).sort({_id:-1}).limit(4);
   res.status(200).json({product:response});    
}

const DisplayAllBooks=async(req, res)=>{
    const resData=await bookModel.find();
    res.status(200).json({product:resData});
};

const allProductDisplay=async(req, res)=>{
    const response= await bookModel.find();
    res.status(200).json({product:response});
}




module.exports={
    UploadBook,
    fetureProductDisplay,
    topsellingProductDisplay,
    trendingProductDisplay,
    DisplayAllBooks,
    allProductDisplay,
    // rentBook,
}


//  const displayAll=async(req, res)=>{
//     const resData=await bookModel.find();
//     res.status(200).json({product:resData})
//  }




















// bookController.js (Controller)
// const Book = require('../models/Book');
// const User = require('../models/User');

// exports.rentBook = async (req, res) => {
//   const bookId = req.params.bookId;
//   const userId = req.user.id;

//   const book = await Book.findById(bookId);
//   const user = await User.findById(userId);

//   if (!book ||!user) {
//     return res.status(404).send('Book or user not found');
//   }

//   if (book.isRented) {
//     return res.status(400).send('Book is already rented');
//   }

//   book.isRented = true;
//   book.rentedBy = user;
//   book.rentalEndDate = Date.now() + 30 * 24 * 60 * 60 * 1000; // 30 days

//   await book.save();

//   user.activeBook = book;
//   await user.save();

//   res.send(`Book rented successfully. Rental end date: ${book.rentalEndDate}`);
// };

// exports.returnBook = async (req, res) => {
//   const bookId = req.params.bookId;
//   const userId = req.user.id;

//   const book = await Book.findById(bookId);
//   const user = await User.findById(userId);

//   if (!book ||!user) {
//     return res.status(404).send('Book or user not found');
//   }

//   if (!book.isRented || book.rentedBy.toString()!== user.id.toString()) {
//     return res.status(400).send('Book is not rented by this user');
//   }

//   book.isRented = false;
//   book.rentedBy = null;
//   book.rentalEndDate = null;

//   await book.save();

//   user.activeBook = null;
//   await user.save();

//   res.send('Book returned successfully');
// };