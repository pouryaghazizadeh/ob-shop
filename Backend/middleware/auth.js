const jwt = require("jsonwebtoken");
require("dotenv").config();
// create a middleware

const auth = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) {
    return res
      .status(406)
      .json({ err: "NO authentication token authorization denied" });
  }
  const verified = jwt.verify(token, process.env.jwtSecret);
  if (!verified) {
    return res
      .status(406)
      .json({ err: "token verification failed authorization denied" });
  }

  req.user_id = verified.id;
  next();
};

module.exports = auth;
