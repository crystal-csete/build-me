module.exports = role => (req, res, next) => {
    if (req.decodedJwt && req.decodedJwt.role === role) {
      next()
    } else {
      res.status(403).json('You do not have access here.')
    }
  }
  // this is a middleware builder function. it is a HOF it returns a function
  // this is dealing with authorization: what you have access to once you are logged in
  