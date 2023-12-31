const asyncHandler = require("../services/asyncHandler");
const schema = require("../models/user");
const userSchema = require("../models/user");
const CustomError = require("../utils/CustomError");
const bcrypt = require("bcrypt");

// create cookie options
const cookieOptions = {
  expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
  httpOnly: true,
};

exports.Signup = asyncHandler(async (req, res) => {
  const { name, email, phone, password, verifyPassword, gender } = req.body;

  // validate schema via joi

  const validate = schema.validate({
    name,
    email,
    phone,
    password,
    gender,
  });

  // if validation fail the return error message
  if (validate.error) {
    return res.status(400).json({
      status: false,
      message: validate.error.details[0].message,
    });
  }

  // check if admin already exists
  const existingAdmin = await userSchema.findOne({ email });
  if (existingAdmin) {
    throw new CustomError("Admin already exists", 400);
  }

  // hash password`
  const salt = await bcrypt.genSalt(10);
  const hasedPassword = await bcrypt.hash(password, salt);

  // create admin
  const admin = await userSchema.create({
    name,
    email,
    phone,
    password: hasedPassword,
    gender,
  });

  await admin.save();
  // console.log("verify token :", verifyEmailToken);

  const token = admin.getJWTtoken();

  admin.password = undefined;

  // set cookie
  res.cookie = ("token", token, cookieOptions);

  res.status(201).json({
    status: true,
    message: "Admin created successfully",
    data: admin,
  });
});

exports.Login = asyncHandler(async (req, res) => {
  // extract userName and password from req.body
  const { email, password } = req.body;
  console.log("Request arrived ");

  if (!email || !password) {
    throw new CustomError("Please provide userId and password", 400);
  }

  //check if admin exists
  const admin = await userSchema.findOne({ email }).select("+password");
  if (!admin) {
    throw new CustomError("Invalid credentials", 400);
  }
  // console.log("admin :", admin);

  // check if password is correct
  const validatePassword = await bcrypt.compare(password, admin.password);
  // console.log("validatePassword :", validatePassword);

  if (!validatePassword) {
    throw new CustomError("Invalid credentials", 400);
  }

  // generate JWT token
  const JWTtoken = admin.getJWTtoken();
  res.cookie("token", JWTtoken, cookieOptions);

  admin.password = undefined;

  // send response
  console.log("Admin logged in successfully");
  res.status(200).json({
    status: true,
    message: "Admin logged in successfully",
    admin: admin,
  });
});
