const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    username: { type: String, required: true },
    bookTitle: { type: String, required: true },
    loanPeriod: { type: Number, required: true },
    date: { type: Date, required: true },
    //  isbn: { type: Number, required: true },
    //date_borrowed: { type: Date, required: true },
    url: { type: String },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
