const router = require("express").Router();
const books = require("../../controllers/booksController");

// Matches with "/db/books"
router.route("/")
  .get(books.findAll)
  .post(books.create);

// Matches with "/db/books/:query"
router
  .route("/:query")
  // .get(booksController.findByQuery)
  // .put(booksController.update)
  // .delete(booksController.remove);

module.exports = router;
