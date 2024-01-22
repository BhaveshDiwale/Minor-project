const User = require('../models/users');
const Review = require('../models/reviews');
const { BadRequestError, UnauthenticatedError } = require('../errors/error');
const { validationResult } = require('express-validator');

const createReview = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res
      .status(400)
      .json({ errors: error.array().map((error) => error.msg) });
  }
  if (!req.user) {
    throw new UnauthenticatedError('Authentication Invalid');
  }
  const { title, description, rating } = req.body;
  const userId = req.user.userId;
  const user = await User.findByPk(req.user.userId);
  if (!user) {
    return res.status(404).json({ msg: 'User not Found' });
  }
  const category = req.user.category;
  const newReview = await Review.create({
    userId: userId,
    review_title: title,
    review_description: description,
    category: category,
    rating: rating,
  });
  return res
    .status(200)
    .json({ msg: 'Review Created', review: { reviewId: newReview.review_id } });
};

const getReviews = async (req, res) => {
  if (!req.user) {
    throw new UnauthenticatedError('Authentication Invalid');
  }
  const page = parseInt(req.query.page) || 1;
  const pageSize = 5;
  const offset = (page - 1) * pageSize;

  const { count, rows: reviews } = await Review.findAndCountAll({
    limit: pageSize,
    offset: offset,
    include: [
      { model: User, attributes: ['username', 'category'], required: true },
    ],
  });

  const totalPages = Math.ceil(count / pageSize);
  if (page > totalPages) {
    throw new BadRequestError('No more reviews.');
  }

  const reviewData = reviews.map((review) => ({
    review_id: review.review_id,
    userId: review.userId,
    username: review.User.username,
    category: review.User.category,
    review_title: review.review_title,
    review_description: review.review_description,
    rating: review.rating,
  }));
  return res.status(200).json({ reviews: reviewData, totalReviews: count });
};

module.exports = { createReview, getReviews };
