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

const disconnect = async () => {
  try {
    await mongoose.disconnect();
  } catch (e) {
    console.error(e);
    throw new Error("Cannot disconnect from database!");
  }
};

module.exports = {
  connect,
  disconnect,
};
