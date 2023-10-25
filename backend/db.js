const mongoose = require("mongoose");
const { URI } = require("./config");

const connect = async () => {
  try {
    await mongoose.connect(URI);
  } catch (err) {
    console.error(err);
    throw new Error("Database connection failed");
  }
};

module.exports = {
  connect,
};
