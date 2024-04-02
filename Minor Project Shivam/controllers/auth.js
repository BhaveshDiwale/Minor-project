const User = require('../models/users');
const { BadRequestError, UnauthenticatedError } = require('../errors/error');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

const register = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res
      .status(400)
      .json({ errors: error.array().map((error) => error.msg) });
  }
  const { username, password } = req.body;
  const existingUser = await User.findOne({ where: { username: username } });
  if (existingUser) {
    throw new BadRequestError('Username alredy exist');
  }
  const hashedPassword = await bcrypt.hash(password, 12);
  const newUser = await User.create({
    username: username,
    password: hashedPassword,
  });
  const token = jwt.sign(
    {
      userId: newUser.id,
      username: newUser.username,
      category: newUser.category,
    },
    process.env.JWT_SECRET_KEY,
    { expiresIn: process.env.JWT_EXPIRY }
  );

  return res.status(200).json({ msg: 'User registered', token: token });
};

const registerCategory = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res
      .status(400)
      .json({ errors: error.array().map((error) => error.msg) });
  }
  if (!req.user) {
    throw new UnauthenticatedError('Authentication Invalid');
  }
  const { category } = req.body;
  console.log(req.user);
  const user = await User.findByPk(req.user.userId);
  if (!user) {
    return res.status(404).json({ msg: 'User not Found' });
  }
  user.category = category;
  const token = jwt.sign(
    {
      userId: user.id,
      username: user.username,
      category: user.category,
    },
    process.env.JWT_SECRET_KEY,
    { expiresIn: process.env.JWT_EXPIRY }
  );
  await user.save();
  return res
    .status(200)
    .json({ msg: 'Category added Successfully', token: token });
};

const login = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res
      .status(400)
      .json({ errors: error.array().map((error) => error.msg) });
  }

  const { username, password } = req.body;
  if (!username || !password) {
    throw new BadRequestError('Please provide email and password');
  }

  const user = await User.findOne({ where: { username: username } });
  if (!user) {
    throw new UnauthenticatedError('Invalid credentials');
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError('Invalid Password');
  }

  const token = jwt.sign(
    {
      userId: user.id,
      username: user.username,
      category: user.category,
    },
    process.env.JWT_SECRET_KEY,
    { expiresIn: process.env.JWT_EXPIRY }
  );

  return res.status(200).json({
    token: token,
    msg: 'Login Successful',
    category: user.category,
    username: user.username,
  });
};

module.exports = { register, registerCategory, login };
