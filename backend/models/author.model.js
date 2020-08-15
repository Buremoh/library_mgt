const mngoose = require("mongoose");

const Schema = mongoose.Schema;

const authorSchema = new Schema(
  {
    first_name: { type: String, required: true },
    family_name: { type: String, required: true },
    date_of_birth: { type: Date, required: true },
    date_of_death: { type: Date, required: true },
    lifespan: { type: String },
    url: { type: String },
  },
  {
    timestamps: true,
  }
);

const Author = mongoose.model("Author", authorSchema);

module.exports = Book;
