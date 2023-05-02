const mongoose = require("mongoose");
require("dotenv").config();

const connnection = mongoose.connect(process.env.MONGO_URL);

module.exports = { connnection };
