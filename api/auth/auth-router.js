const bcryptjs = require("bcryptjs");
const jwt = require('jsonwebtoken')
const router = require("express").Router();
const { jwtSecret } = require('../../config/secret.js')
const Diners = require("../diners/diners-model.js");
const { isValid } = require("../diners/diners-service.js");


router.post("/register", (req, res) => {
    const credentials = req.body;
  
    if (isValid(credentials)) {
      const rounds = process.env.BCRYPT_ROUNDS || 8;
  
      // hash the password
      const hash = bcryptjs.hashSync(credentials.password, rounds);
  
      credentials.password = hash;
  
      // save the user to the database
      Diners.add(credentials)
        .then(diner => {
          res.status(201).json({ data: diner });
        })
        .catch(error => {
          res.status(500).json({ message: error.message });
        });
    } else {
      res.status(400).json({
        message: "please provide username and password and the password shoud be alphanumeric",
      });
    }
  });
  
  router.post("/login", (req, res) => {
    const { username, password } = req.body;
  
    if (isValid(req.body)) {
      Diners.findBy({ username: username })
        .then(([diner]) => {
          // compare the password the hash stored in the database
          if (diner && bcryptjs.compareSync(password, diner.password)) {
            // build token and send it back
            const token = generateToken(diner)
            res.status(200).json({ message: "Welcome to our API", token });
          } else {
            res.status(401).json({ message: "Invalid credentials" });
          }
        })
        .catch(error => {
          res.status(500).json({ message: error.message });
        });
    } else {
      res.status(400).json({
        message: "please provide username and password and the password shoud be alphanumeric",
      });
    }
  });
  
  //helper function to build token
  function generateToken(diner) {
    const payload = {
      subject: diner.id,
      username: diner.username,
      role: diner.role,
    }
    const options = {
      expiresIn: '7 days',
    }
  
    return jwt.sign(payload, jwtSecret, options)
  }
  
  module.exports = router;
  