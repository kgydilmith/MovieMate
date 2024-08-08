import User from "../models/User.js";
import bcrypt from "bcryptjs";

//get details
export const getAllusers = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    return console.log(err); // Handle the error, pass it to the next middleware
  }
  if (!users) {
    return res.status(500).json({ message: "Unexpected error occurred" });
  }
  return res.status(200).json({ users }); // Correct the response method
};

//signup

export const signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  if (
    !name &&
    name.trim() === "" &&
    !email &&
    email.trim() === " " &&
    !password &&
    password.trim() === ""
  ) {
    return res.status(422).json({ message: "invalid inputs" });
  }
  const hashedpassword = bcrypt.hashSync(password);
  let user;
  try {
    user = new User({ name, email, password: hashedpassword });
    user = await user.save();
  } catch (err) {
    return console.log(err);
  }

  if (!user) {
    return res.status(500).json({ message: "unexpected errr occurese" });
  }
  return res.status(201).json({ user });
};

//update

export const updateUser = async (req, res, next) => {
  const id = req.params.id;

  const { name, email, password } = req.body;
  if (
    !name &&
    name.trim() === "" &&
    !email &&
    email.trim() === " " &&
    !password &&
    password.trim() === ""
  ) {
    return res.status(422).json({ message: "invalid inputs" });
  }
  const hashedpassword = bcrypt.hashSync(password);
  let user;
  try {
    user = await User.findByIdAndUpdate(id, {
      name,
      email,
      password: hashedpassword,
    });
  } catch (err) {
    return console.log(err);
  }
  if (!user) {
    return res.status(500).json({ message: "somthnig went wrong" });
  }
  res.status(200).json({ message: "updated successfull" });
};

export const deleteUSer = async (req, res, next) => {
  const id = req.params.id;
  let user;
  try {
    user = await User.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
  }

  if (!user) {
    return res.status(500).json({ message: "somthnig went wrong" });
  }
  res.status(200).json({ message: "delete successfull" });
};

//login

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email && email.trim() === " " && !password && password.trim() === "") {
    return res.status(422).json({ message: "invalid inputs" });
  }
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    console.log(err);
  }
  if (!existingUser) {
    return res
      .status(404)
      .json({ message: "unable to find user from this id" });
  }

  const ispasswordcorrect = bcrypt.compareSync(password, existingUser.password);

  if (!ispasswordcorrect) {
    return res.status(400).json({ message: "password incorect" });
  }
  return res.status(200).json({ message: "login succefull" });
};
