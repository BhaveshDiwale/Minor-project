require('dotenv').config();
require('express-async-errors');
const createTable = require('./db/create_table');
const cors = require('cors');
const express = require('express');
const app = express();

const authMidlleware = require('./middleware/authentication');
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
const authRouter = require('./routes/auth');
const reviewRouter = require('./routes/reviews');

app.use(cors());
app.use(express.json());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/review', authMidlleware, reviewRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
const port = process.env.PORT || 8080;

const startServer = async () => {
  try {
    await createTable();
    app.listen(port, () => console.log(`Server listening on port: ${port}`));
  } catch (error) {
    console.log(error);
  }
};

startServer();
