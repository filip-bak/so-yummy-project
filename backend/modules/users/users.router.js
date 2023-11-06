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
const { cloudinary } = require("./users.cloudinary");
const { User } = require("./users.model");
const { updateUser } = require("./users.service");

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

usersRouter.post(
  "/upload",
  authMiddleware,
  usersController.upload.single("image"),
  async (req, res) => {
    try {
      const { email } = req.user;
      const { width = 250, height = 250 } = req.body;

      const uploadOptions = {
        width,
        height,
        crop: "fill",
      };

      cloudinary.uploader.upload(
        req.file.path,
        uploadOptions,
        async (err, result) => {
          if (err) {
            console.error(err);
            return res.status(500).json({
              message: "Error",
            });
          }
          const imageUrl = result.secure_url;

          await updateUser(email, { avatarURL: imageUrl });

          res.status(200).json({
            message: "Uploaded",
            avatarURL: imageUrl,
          });
        }
      );
    } catch (error) {
      console.log(error);
      res.send({
        message: error.message,
      });
    }
  }
);

module.exports = {
  usersRouter,
};
