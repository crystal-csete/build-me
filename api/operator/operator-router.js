const router = require("express").Router();

const Operator = require("./operator-model.js.js");
const restricted = require("../auth/restricted-middleware.js");
const restrictRole = require('../auth/roleRestricted-middleware.js')

//added these 2 middlewares to restrict access to the 2 different roles 
router.get("/", restricted, restrictRole('admin'), (req, res) => {
  Operator.find()
    .then(operator => {
      res.json(operator);
    })
    .catch(err => res.send(err));
});

module.exports = router;