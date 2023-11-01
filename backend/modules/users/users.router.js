const { Router } = require("express");
const usersController = require("./users.controller");
const {
  userValidationMiddleware,
  userNameValidator,
  userLoginValidator,
} = require("./users.validators");
const { authMiddleware } = require("../auth/auth.middleware");
const multer = require("multer");
const path = require("path");

const uploadDir = path.join(process.cwd(), "public");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
  limits: {
    fileSize: 1048576,
  },
});

const upload = multer({
  storage: storage,
});

const usersRouter = Router();

usersRouter.post(
  "/signup",
  userValidationMiddleware,
  usersController.signupHandler
);
usersRouter.post("/login", userLoginValidator, usersController.loginHandler);
usersRouter.post("/logout", authMiddleware, usersController.logoutHandler);
usersRouter.get("/current", authMiddleware, usersController.currentHandler);
usersRouter.get("/verify/:verificationToken", usersController.verifyHandler);
usersRouter.post("/verify", usersController.resendVerificationHandler);
usersRouter.patch(
  "/",
  authMiddleware,
  userNameValidator,
  usersController.updateUserNameHandler
);
// usersRouter.patch(
//   "/avatars",
//   authMiddleware,
//   upload.single("avatar"),
//   usersController.updateUserAvatarHandler
// );
module.exports = {
  usersRouter,
};
