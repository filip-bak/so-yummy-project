const dotenv = require("dotenv");

dotenv.config();

const allowedOrigin = process.env.ALLOWED_ORIGIN || "http://localhost:3000";

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigin === origin || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 204,
};

module.exports = {
  corsOptions,
  serverPort: process.env.PORT || 3000,
  URI: process.env.MONGO_URI,
  hostURL: process.env.HOST_URL,
  jwtSecret: process.env.JWT_SECRET,
  jwtLifeTime: process.env.JWT_LIFETIME,
  gmailUser: process.env.GMAIL_USER,
  gmailPassword: process.env.GMAIL_PASSWORD,
};
