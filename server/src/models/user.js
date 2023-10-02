const mongoose = require("mongoose");
const asyncHandler = require("../services/asyncHandler.js");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const config = require("../config/index");
const crypto = require("crypto");
const Joi = require("joi");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      max: 255,
      min: 6,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      max: 255,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      min: 6,
      max: 1024,
      required: true,
      trim: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["MALE", "FEMALE", "OTHERS"],
    },
    phone: {
      type: String,
      required: true,
      max: 10,
      min: 10,
      trim: true,
    },
    forgetPasswordToken: {
      type: String,
      trim: true,
    },
    forgetPasswordTokenTime: {
      type: Date,
      trim: true,
    },
    photo: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

exports.schema = Joi.object({
  name: Joi.string().min(6).max(255).required(),
  email: Joi.string().min(6).max(255).required().email(),
  password: Joi.string().min(6).max(1024).required(),
  gender: Joi.string().valid("MALE", "FEMALE", "OTHERS").required(),
  phone: Joi.string().length(10).required(),
});

userSchema.methods = {
  matchPassword: asyncHandler(async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  }),

  getJWTtoken: function () {
    return JWT.sign({ _id: this._id, role: this.role }, config.JWT_SECRET, {
      expiresIn: config.JWT_EXPIRE,
    });
  },

  // Generate forgot password token
  generateForgotPasswordToken: function () {
    const forgotToken = crypto.randomBytes(20).toString("hex");

    // Just to encrypt the token generated by crypto
    this.forgetPasswordToken = crypto
      .createHash("sha256")
      .update(forgotToken)
      .digest("hex");

    // Set the expiration time for the token
    this.forgetPasswordTokenTime = Date.now() + 20 * 60 * 1000;

    return forgotToken;
  },

  //generate verify email token
  generateVerifyEmailToken: function () {
    const verifyToken = crypto.randomBytes(40).toString("hex");

    // Just to encrypt the token generated by crypto
    this.verifyEmailToken = crypto
      .createHash("sha256")
      .update(verifyToken)
      .digest("hex");
    this.verifyEmailTokenExpiry = Date.now() + 10 * 60 * 1000;
    return verifyToken;
  },
};

userSchema.method.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
