const router = require("express").Router();
const books = require("../../controllers/booksController");

// Matches with "/db/books"
router.route("/")
  .get(books.findAll)
  .post(books.create);

// Matches with "/db/books/:id"
router
  .route("/:id")
  .get(books.findById)
  .put(books.update)
  .delete(books.remove);

module.exports = router;
