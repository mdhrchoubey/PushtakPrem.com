// book.js
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Book = require('../models/Book');
const User = require('../models/User');

// Rent a book
router.post('/rent', async (req, res) => {
  const { bookId, userId } = req.body;
  const book = await Book.findById(bookId);
  const user = await User.findById(userId);

  if (!book ||!user) {
    return res.status(404).send('Book or user not found');
  }

  if (book.isRented) {
    return res.status(400).send('Book is already rented');
  }

  book.isRented = true;
  book.rentedBy = user._id;
  book.rentalEndDate = Date.now() + 30 * 24 * 60 * 60 * 1000; // 30 days

  await book.save();

  user.rentedBooks.push(book._id);
  await user.save();

  res.send(`Book rented successfully. Rental end date: ${book.rentalEndDate}`);
});

// Return a rented book
router.post('/return', async (req, res) => {
  const { bookId, userId } = req.body;
  const book = await Book.findById(bookId);
  const user = await User.findById(userId);

  if (!book ||!user) {
    return res.status(404).send('Book or user not found');
  }

  if (!book.isRented || book.rentedBy.toString()!== user._id.toString()) {
    return res.status(400).send('Book is not rented by this user');
  }

  book.isRented = false;
  book.rentedBy = null;
  book.rentalEndDate = null;

  await book.save();

  user.rentedBooks.pull(book._id);
  await user.save();

  res.send('Book returned successfully');
});

// Get a rented book for online reading
router.get('/read/:bookId', async (req, res) => {
  const bookId = req.params.bookId;
  const book = await Book.findById(bookId);

  if (!book) {
    return res.status(404).send('Book not found');
  }

  if (!book.isRented || book.rentalEndDate < Date.now()) {
    return res.status(400).send('Book is not rented or rental period has ended');
  }

  const pdfBuffer = await book.getPdfBuffer();
  res.set('Content-Type', 'application/pdf');
  res.set('Content-Disposition', `inline; filename="${book.title}.pdf"`);

  res.send(pdfBuffer);
});

module.exports = router;