const userDao = require("./users.service");
const authService = require("../auth/auth.service");
const jimp = require("jimp");
const mimetypes = require("mime-types");
const { v4 } = require("uuid");
const path = require("path");
const fs = require("fs/promises");
const User = require("./users.model");
const { sendUserVerificationMail } = require("./users-mailer.service");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const { cloudinary } = require("./users.cloudinary");

const multer = require("multer");

const signupHandler = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const createdUser = await userDao.createUser({ name, email, password });

    await sendUserVerificationMail(
      createdUser.email,
      createdUser.verificationToken
    );

    return res.status(201).send({
      user: {
        name: createdUser.name,
        email: createdUser.email,
        avatarURL: createdUser.avatarURL,
        verify: createdUser.verify,
      },
    });
  } catch (e) {
    const { message } = e;

    if (e instanceof userDao.DuplicatedKeyError) {
      return res.status(409).send({ message });
    }

    return next(e);
  }
};

const loginHandler = async (req, res, next) => {
  try {
    const userEntity = await userDao.getUser({ email: req.body.email });
    const userPasswordValidate = await userEntity.validatePassword(
      req.body.password
    );

    if (!userEntity || !userPasswordValidate) {
      return res.status(401).send({ message: "Wrong credentials." });
    }

    if (!userEntity.verified) {
      return res.status(403).send({ message: "User is not verified." });
    }

    const userPayload = {
      name: userEntity.name,
      email: userEntity.email,
    };

    const token = authService.generateAccessToken(userPayload);
    await userDao.updateUser(userEntity.email, { token });

    return res.status(200).send({
      user: userPayload,
      token,
    });
  } catch (e) {
    return next(e);
  }
};

const logoutHandler = async (req, res, next) => {
  try {
    const { email } = req.user;
    await userDao.updateUser(email, { token: null });

    return res.status(204).send();
  } catch (e) {
    return next(e);
  }
};

const currentHandler = async (req, res, next) => {
  try {
    const { name, email } = req.user;
    return res.status(200).send({ user: { name, email } });
  } catch (e) {
    return next(e);
  }
};

const updateUserNameHandler = async (req, res, next) => {
  try {
    const user = await userDao.updateUser(req.user.email, req.body);
    if (!user) {
      return res.status(404).json({ message: "Not found" });
    }
    return res.send({ email: user.email, name: user.name });
  } catch (err) {
    return next(err);
  }
};

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

const verifyHandler = async (req, res, next) => {
  try {
    const { verificationToken } = req.params;
    const user = await userDao.getUser({ verificationToken });

    if (!user) {
      return res
        .status(404)
        .send({ message: "Verification token is not valid or expired. " });
    }

    if (user.verified) {
      return res.status(400).send({ message: "User is already verified. " });
    }

    await userDao.updateUser(user.email, {
      verified: true,
      verificationToken: null,
    });

    return res.status(200).send({ message: "User has been verified." });
  } catch (e) {
    return next(e);
  }
};

const resendVerificationHandler = async (req, res, next) => {
  try {
    const user = await userDao.getUser({ email: req.body.email });

    if (!user) {
      return res.status(404).send({ message: "User does not exist." });
    }

    if (user.verified) {
      return res.status(400).send({ message: "User is already verified." });
    }

    await sendUserVerificationMail(user.email, user.verificationToken);

    return res.status(204).send();
  } catch {
    return next(e);
  }
};

module.exports = {
  signupHandler,
  loginHandler,
  logoutHandler,
  currentHandler,
  updateUserNameHandler,
  verifyHandler,
  resendVerificationHandler,
  upload,
};
