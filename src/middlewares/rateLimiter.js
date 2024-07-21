// middlewares/rateLimiter.js
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 минут
  max: 300, // Ограничение: 300 запросов с одного IP за 15 минут
  message: 'Too many requests from this IP, please try again after 15 minutes'
});

module.exports = limiter;

