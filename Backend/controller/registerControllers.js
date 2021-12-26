// import bcrypt for hash password
const bcrypt = require("bcrypt");
//get  model schema user
const User = require("../models/user");




// make user
const registerUser = async (req, res) => {
  try {
    //   check registration be completed
    if (!req.body) {
      res.status(406).json({ err: "you have to fill the registration form" });
      return;
    }
    // get data registration
    let { email, password, passwordCheck, userName } = req.body;
    // check data is exist
    if (!email || !password || !passwordCheck) {
      return res.status(406).json({ err: "Not all fields have been entered" });
    }
    // check password
    if (password.length <= 8) {
      return res
        .status(406)
        .json({ err: "password need to be  least 8 character long" });
    }
    // check password be equal passwordCheck
    if (password !== passwordCheck) {
      return res
        .status(406)
        .json({ err: "password must be same for verification" });
    }
    // hashing password
    const hash = await bcrypt.hashSync(password, 10);

    // use document structure
    const newUser = new User({
      email,
      password: hash,
      userName,
    });
    // send data to mongodb
    newUser
      .save(newUser)
      .then((register) => {
        res.json(register);
      })
      .catch((error) => {
        res.status(406).json({
          err: error.massage || "Something went wrong while registration",
        });
      });

    //
  } catch (error) {
    res.status(500).json({ err: error.message || "error while registration" });
  }
};

module.exports = {
  registerUser,

};
