const mngoose = require("mongoose");

const Schema = mongoose.Schema;

const bookInstanceSchema = new Schema(
  {
    title: { type: String, required: true },
    inprint: { type: String, required: true },
    status: { type: String, required: true },
    due_back: { Date, required: true },
    url: { type: String },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("BookInstance", bookInstanceSchema);

module.exports = BookInstance;
