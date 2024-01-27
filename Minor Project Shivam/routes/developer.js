const express = require('express');
const router = express.Router();
const authMidlleware = require('../middleware/authentication');
const { createDevProfile, getDevProfile } = require('../controllers/developer');
const {
  createDevBodyValidation,
} = require('../utils/validation/validation_values');

router.post(
  '/create-dev-profile',
  authMidlleware,
  createDevBodyValidation,
  createDevProfile
);

router.get('/get-dev-profile', authMidlleware, getDevProfile);

module.exports = router;
