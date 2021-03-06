const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const dbRoutes = require("./db");

// API Routes
router.use("/api", apiRoutes); // for Google requests
router.use("/db", dbRoutes); // for local mongo DB

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
