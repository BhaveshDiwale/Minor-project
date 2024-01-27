const { body } = require('express-validator');

const registerValidation = [
  body('username')
    .isString()
    .isLength({ min: 8 })
    .trim()
    .withMessage('Username must be atleast 8 characters long'),
  body('password')
    .isString()
    .isLength({ min: 8 })
    .withMessage('Password must be atleast 8 characters long'),
];

const registerCategoryValidation = [
  body('category')
    .isIn(['Client', 'Developer'])
    .withMessage('Invalid Category. Must be either Client or Developer.'),
];

const reviewBodyValidation = [
  body('title')
    .isString()
    .isLength({ min: 6 })
    .withMessage('Review title must be of minimum 6 characters long'),

  body('description')
    .isString()
    .isLength({ min: 6 })
    .withMessage('Review title must be of minimum 6 characters long'),
];

const createDevBodyValidation = [
  body('name').isString().withMessage('Name must be string'),
  body('bio')
    .isString()
    .isLength({ min: 10, max: 100 })
    .withMessage('Bio must be atleast 10 and atmost 100 characters long'),
  body('qualification').isString().withMessage('Must be String'),
  body('instituteName').isString().withMessage('Must be String'),
  body('experience').isInt().withMessage('Must be Integer'),
];

module.exports = {
  registerValidation,
  registerCategoryValidation,
  reviewBodyValidation,
  createDevBodyValidation,
};
