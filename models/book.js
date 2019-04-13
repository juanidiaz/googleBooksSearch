const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  googleId: { type: String, required: true },
  title: { type: String, required: true },
  subTitle: { type: String },
  author: { type: String },
  description: { type: String, required: true },
  publisher: { type: String, required: true },
  publishedDate: { type: Date, required: true },
  image: { type: String, required: true },
  link: { type: String, required: true },
  pageCount: { type: Number },
  language: { type: String },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
