const { Router } = require("express");
const usersController = require("./users.controller");
const {
  userValidationMiddleware,
  userNameValidator,
  userLoginValidator,
} = require("./users.validators");
const { authMiddleware } = require("../auth/auth.middleware");
const multer = require("multer");
// const path = require("path");
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

      const uploadOptions = {
        width: 250,
        height: 250,
        crop: "fill",
      };

      if (!req.file) {
        return res.status(400).json({
          message: "File not provided.",
        });
      }
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

          return res.status(200).json({
            message: "Uploaded",
            avatarURL: imageUrl,
          });
        }
      );
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Upload failed",
      });
    }
  }
);

module.exports = {
  usersRouter,
};
