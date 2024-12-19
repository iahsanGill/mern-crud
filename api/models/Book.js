const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    isbn: {
      type: String,
      required: true,
    },
  },
  {
    collection: "books",
  }
);

module.exports = mongoose.model("Book", bookSchema);
