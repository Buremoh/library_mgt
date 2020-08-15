const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const librarianSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
  },
  {
    timestamps: true,
  }
);

const Librarian = mongoose.model("Librarian", librarianSchema);

module.exports = Librarian;
