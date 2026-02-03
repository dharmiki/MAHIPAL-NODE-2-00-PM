const Book = require("../models/Book");
const Issue = require("../models/Issue");

exports.getBooks = async (req, res) => {
  res.json(await Book.find());
};

exports.issueBook = async (req, res) => {
  const book = await Book.findById(req.params.bookId);
  if (!book || book.availableCopies < 1)
    return res.status(400).json({ message: "Not available" });

  const issue = await Issue.create({
    user: req.user._id,
    book: book._id
  });

  book.availableCopies--;
  await book.save();

  res.json(issue);
};

exports.returnBook = async (req, res) => {
  const issue = await Issue.findById(req.params.issueId).populate("book");

  const lateDays =
    Math.ceil((Date.now() - issue.issueDate) / 86400000) - 14;

  issue.fine = lateDays > 0 ? lateDays * 10 : 0;
  issue.returned = true;
  issue.returnDate = Date.now();

  issue.book.availableCopies++;
  await issue.book.save();
  await issue.save();

  res.json({ fine: issue.fine });
};
