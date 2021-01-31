const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../../config/secret.js')

module.exports = (req, res, next) => {
  const token = req.headers.authorization
  if (token) {
    // you need 3 params: token, secret to sign the token, and a callback (err, decoded)
    // if the token is bad, it will throw one of the errors below (maybe expired)
    // if the token is good, it will be decoded header and payload       
    jwt.verify(token, jwtSecret, (err, decoded) => {
      if (err) {
        res.status(401).json('You need a VALID token.') //not sending back actual err
      } else {
        req.decodedJwt = decoded //further middlewares down the line, already have the user info on the req object
        next()
      }
    })
  } else {
    res.status(401).json('You need a token to proceed.')
  }
};
