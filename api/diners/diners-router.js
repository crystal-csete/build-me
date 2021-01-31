const router = require("express").Router();

const Diners = require("./diners-model.js");
const restricted = require("../auth/restricted-middleware.js");
const restrictRole = require('../auth/roleRestricted-middleware.js')

//added these 2 middlewares to restrict access to the 2 different roles 
router.get("/", restricted, restrictRole('admin'), (req, res) => {
  Diners.find()
    .then(diners => {
      res.json(diners);
    })
    .catch(err => res.send(err));
});

module.exports = router;
