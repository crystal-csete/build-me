const router = require('express').Router()
const restricted = require("../auth/restricted-middleware.js");
const restrictRole = require('../auth/roleRestricted-middleware.js')

const Trucks = require('./trucks-model.js')

//added these 2 middlewares to restrict access to the 2 different roles 
router.get("/", restricted, restrictRole, (req, res) => {
    Trucks.find()
      .then(trucks => {
        res.json(trucks);
      })
      .catch(err => res.send(err));
  });

  router.post("/", restricted, (req, res) => {
    
  });

  router.put("/", restricted, (req, res) => {
    
  });

  router.delete("/", (req, res) => {
   
  });
  
  module.exports = router;