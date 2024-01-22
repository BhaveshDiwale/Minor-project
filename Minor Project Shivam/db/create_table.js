const userTable = require('../models/users');
const reviewTable = require('../models/reviews');

const createTable = async () => {
  await userTable.sync();
  await reviewTable.sync();
};

module.exports = createTable;
