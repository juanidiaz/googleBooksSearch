const router = require("express").Router();
const api = require("../../controllers/apiController");

// Matches with "/api/books/:query"
router.route("/:query")
  .get((req, res) => {
    api.findByQuery(req.params.query)
    .then((data) => {res.send(data)})
    .catch(err => res.status(422).json(err));
});

module.exports = router;
