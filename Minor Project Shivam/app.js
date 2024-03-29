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
const developerRouter = require('./routes/developer');
const clientRouter = require('./routes/client');

app.use(cors());
app.use(express.json());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/client', clientRouter);
app.use('/api/v1/dev', developerRouter);
app.use('/api/v1/review', reviewRouter);

app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);
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
