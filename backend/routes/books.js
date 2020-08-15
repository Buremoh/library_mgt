const router = require("express").Router();
let Book = require("../models/book.model");

router.route("/").get((req, res) => {
  Book.find()
    .then((books) => res.json(books))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const bookTitle = req.body.bookTitle;
  const loanPeriod = Number(req.body.loanPeriod);
  const date = Date.parse(req.body.date);
  //const isbn = Number(req.body.isbn);
  //const date_borrowed = Date.parse(req.body.date);
  const url = req.body.url;

  const newBook = new Book({
    username,
    bookTitle,
    loanPeriod,
    date,
    // isbn,
    //date_borrowed,
    url,
  });

  newBook
    .save()
    .then(() => res.json("Book added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Book.findById(req.params.id)
    .then((book) => res.json(book))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Book.findByIdAndDelete(req.params.id)
    .then(() => res.json("Book deleted!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Book.findById(req.params.id)
    .then((book) => {
      book.username = req.body.username;
      book.bookTitle = req.body.bookTitle;
      book.loanPeriod = Number(req.body.loanPeriod);
      book.date = Date.parse(req.body.date);

      book
        .save()
        .then(() => res.json("Book Updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
