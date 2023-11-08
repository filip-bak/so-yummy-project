const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    token: {
      type: String,
      default: null,
    },
    avatarURL: {
      type: String,
      default:
        "https://res.cloudinary.com/dzumlzedi/image/upload/v1699300454/bss5epsed7avbhuqkvd5.png",
    },
    subscription: {
      type: Boolean,
      default: false,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      default: null,
    },
    favorites: {
      type: Array,
      default: [],
    },
    shoppingList: {
      type: Array,
      default: [],
    },
  },
  { versionKey: false, timestamps: false }
);

userSchema.pre("save", async function (next) {
  if (!this.password) {
    return;
  }

  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.validatePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = new mongoose.model("users", userSchema);

module.exports = {
  User,
};
