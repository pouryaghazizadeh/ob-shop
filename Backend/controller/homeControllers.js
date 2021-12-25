//model home
const Home = require("../models/Home");

const getHome = async (req, res) => {
  try {
    const home = await Home.find({});
    res.json(home);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "server error" });
  }
};
module.exports = getHome;
