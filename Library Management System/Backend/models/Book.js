// models/Book.js
const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  isbn: { type: String, unique: true },
  totalCopies: Number,
  availableCopies: Number
}, { timestamps: true });

module.exports = mongoose.model("Book", bookSchema);
