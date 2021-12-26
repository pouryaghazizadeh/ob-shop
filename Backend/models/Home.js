const mongoose = require("mongoose");

// make model for database
const homeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,

  },
  img: {
    type: String,
    required: true,
  },

  animationImg: {
    type: String,
    required: true,
  },
  animationText: {
    type: String,
    required: true,
  },
});

const Home = mongoose.model("home", homeSchema);

module.exports = Home;
