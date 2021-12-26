require("dotenv").config();
// import bcrypt for hash password
const bcrypt = require("bcrypt");
//get  model schema user
const User = require("../models/user");
// jwt
const jwt = require("jsonwebtoken");

const loginUser = async (req, res) => {
  try {
    //   validate request
    if (!req.body) {
      res.status(406).json({ err: "you have to fill the email and password" });
    }
    // get user data
    const { email, password } = req.body;

    // validation
    if (!email || !password) {
      return res.status(406).json({ err: "Not all fields have been entered" });
    }
    // check user is exist
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(406).json({ err: "No account with this email." });
    }
    const isMatch = bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(406).json({ err: "invalid email or password" });
    }

    // create jwt token
    const token = jwt.sign({ id: user._id }, process.env.jwtSecret);

    // this line must be end for work your validations and
    // this show us email and userName for show in the frontend
    res.json({ token, userName: user.userName, email: user.email });
  } catch (error) {
    return res.status(500).json({ err: error.massage || "Error while login" });
  }
};

module.exports = {
  loginUser,
};
