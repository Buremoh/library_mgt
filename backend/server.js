const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB!");
});

const booksRouter = require("./routes/books");

const usersRouter = require("./routes/users");

const librariansRouter = require("./routes/librarians");

app.use("/books", booksRouter);
app.use("/users", usersRouter);
app.use("/librarians", librariansRouter);


// Serve static assets if in production
if(process.env.NODE_ENV === "production") {

  //Set static folder
  //All the jsvascript and css files will be read and served from this folder
  app.use(express.static("../client/build"));

  //index.html for all page routes
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(_dirname, "../client/build/index.html"));
  })
}



app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
