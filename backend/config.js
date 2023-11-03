const dotenv = require("dotenv");

dotenv.config();

const corsOptions = {
  origin: function (origin, callback) {
    const devOrigin = "http://localhost:3000";
    const prodOrigin = "https://your-frontend-app-domain.com";

    if (
      process.env.NODE_ENV === "development" &&
      origin &&
      origin.startsWith("http://localhost:3000")
    ) {
      // Allow requests from localhost in development environment
      callback(null, true);
    } else if (
      process.env.NODE_ENV === "production" &&
      origin &&
      origin === "https://your-frontend-app-domain.com"
    ) {
      // Allow requests from your hosted website in production environment
      callback(null, true);
    } else {
      // Deny the request for all other origins
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 204,
};

module.exports = {
  serverPort: process.env.PORT || 3000,
  URI: process.env.MONGO_URI,
  hostURL: process.env.HOST_URL,
  jwtSecret: process.env.JWT_SECRET,
  jwtLifeTime: process.env.JWT_LIFETIME,
  gmailUser: process.env.GMAIL_USER,
  gmailPassword: process.env.GMAIL_PASSWORD,
};
