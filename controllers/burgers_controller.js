var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  burger.all(function(data) {
      var handlebarsObject = {
      burgers: data
  };
  console.log(handlebarsObject);
  res.render("index", handlebarsObject);
  });
});

router.post("/burgers", function(req, res) {
  burger.create(
      ["burger_name"], [req.body.b_name], function() {
          res.redirect("/burgers");
      });
});

router.put("/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);

  burger.update(
  {"devoured": req.body.devoured}, condition, function(data) {
          res.redirect("/burgers");
  });
});

module.exports = router;