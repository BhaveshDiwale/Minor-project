const express = require('express');
const router = express.Router();
const authMidlleware = require('../middleware/authentication');
const {
  createClientProfile,
  getClientProfile,
} = require('../controllers/client');
const {
  createClientBodyValidation,
} = require('../utils/validation/validation_values');

router.post(
  '/create-client-profile',
  authMidlleware,
  createClientBodyValidation,
  createClientProfile
);

router.get('/get-client-profile', authMidlleware, getClientProfile);

module.exports = router;
