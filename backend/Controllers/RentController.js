const rentModel=require("../Models/RentBookModel");
const rental=require("../Models/BookModel")



const rentBook=async(req, res)=>{
    try {
        const book = await rental.findById(req.params.id);
        if (book && book.available) {
            book.available = false;
            await book.save();
            res.json({ message: `${book.name} has been rented.` });
        } else {
            res.status(400).json({ message: 'Book is not available.' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
    // const returnBook = async (req, res) => {
    //       const bookId = req.params.bookId;
    //       const userId = req.user.id;
        
    //       const book = await bookModel.findById(bookId);
    //       const user = await usermodel.findById(userId);
        
    //       if (!book ||!user) {
    //         return res.status(404).send('Book or user not found');
    //       }
        
    //       if (!book.isRented || book.rentedBy.toString()!== user.id.toString()) {
    //         return res.status(400).send('Book is not rented by this user');
    //       }
        
    //       book.isRented = false;
    //       book.rentedBy = null;
    //       book.rentalEndDate = null;
        
    //       await book.save();
        
    //       user.activeBook = null;
    //       await user.save();
        
    //       res.send('Book returned successfully');
    //     };
        module.exports={
            rentBook
        }