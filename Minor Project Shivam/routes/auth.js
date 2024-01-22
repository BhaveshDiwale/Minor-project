const express = require('express');
const router = express.Router();
const { register, registerCategory, login } = require('../controllers/auth');
const authMiddleware = require('../middleware/authentication');
const {
  registerValidation,
  registerCategoryValidation,
} = require('../utils/validation/validation_values');

//register
router.post('/register', registerValidation, register);
//add category
router.post(
  '/add-category',
  authMiddleware,
  registerCategoryValidation,
  registerCategory
);

//login
router.post('/login', registerValidation, login);

module.exports = router;
