const router = require("express").Router();
let Librarian = require("../models/librarian.model");

router.route("/").get((req, res) => {
  User.find()
    .then((librarians) => res.json(librarians))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;

  const newLibrarian = new Librarian({ username });

  newLibrarian
    .save()
    .then(() => res.json(librarian))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
