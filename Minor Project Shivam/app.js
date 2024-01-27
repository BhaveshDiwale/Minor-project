require('dotenv').config();
require('express-async-errors');
const createTable = require('./db/create_table');
const cors = require('cors');
const express = require('express');
const app = express();

const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
const authRouter = require('./routes/auth');
const reviewRouter = require('./routes/reviews');
const develpoerRouter = require('./routes/developer');

app.use(cors());
app.use(express.json());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/dev', develpoerRouter);
app.use('/api/v1/review', reviewRouter);

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
