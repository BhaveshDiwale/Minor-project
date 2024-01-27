const express = require('express');
const router = express.Router();
const authMidlleware = require('../middleware/authentication');
const {
  createReview,
  getReviews,
  deleteReview,
  updateReview,
} = require('../controllers/reviews');
const {
  reviewBodyValidation,
} = require('../utils/validation/validation_values');

//post review
router.post(
  '/create-review',
  authMidlleware,
  reviewBodyValidation,
  createReview
);

//get all reviews
router.get('/get-reviews', getReviews);

// delete review
router.delete('/delete-review', authMidlleware, deleteReview);

//update review
router.put(
  '/update-review',
  authMidlleware,
  reviewBodyValidation,
  updateReview
);

module.exports = router;
