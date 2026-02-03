const Book = require("../models/Book");
const Issue = require("../models/Issue");
const User = require("../models/User");

exports.addBook = async (req, res) => {
  const book = await Book.create({
    ...req.body,
    availableCopies: req.body.totalCopies
  });
  res.json(book);
};

exports.getAllIssues = async (req, res) => {
  res.json(await Issue.find().populate("user book"));
};

exports.dashboard = async (req, res) => {
  res.json({
    users: await User.countDocuments(),
    books: await Book.countDocuments(),
    issues: await Issue.countDocuments()
  });
};
