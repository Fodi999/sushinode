const express = require('express');
const path = require('path');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimiter = require('./middlewares/rateLimiter');
const apiRouter = require('./routes/api');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(helmet());
app.use(morgan('combined'));
app.use(express.json());
app.use(rateLimiter);

// Убедитесь, что путь к статическим файлам указан правильно
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api', apiRouter);

// Error Handler
app.use(errorHandler);

module.exports = app;






