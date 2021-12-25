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
    res.json({ email, password, passwordCheck, userName });
  } catch (error) {
    res.status(500).json({ err: error.message || "error while registration" });
  }
};


module.exports = {
  registerUser,
};
