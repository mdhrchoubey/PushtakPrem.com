
const mongoose = require("mongoose");


const productSchema= new mongoose.Schema({ 

    name:String,
    auther:String, 
    category:String,
    tags:String,
    price: Number,
    image:String,
    pages: Number,
  isRented: Boolean,
  rentedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  rentalEndDate: Date,
//   title: { type: String, required: true },
    // author: { type: String, required: true },
    content: { type: String, required: true },
    available: { type: Boolean, default: true }
})

module.exports = mongoose.model("product", productSchema);







// bookSchema.methods.getPdfBuffer = async function () {
//     // Implement logic to retrieve PDF buffer from storage
//     // For example, using AWS S3
//     const s3 = new AWS.S3();
//     const params = { Bucket: 'y-bucket', Key: `books/${this._id}.pdf` };
//     const data = await s3