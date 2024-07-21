// routes/pages.js
const express = require('express');
const router = express.Router();
const path = require('path');

// Маршрут для главной страницы
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Маршрут для страницы About Us
router.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/about.html'));
});

// Маршрут для страницы Contact
router.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/contact.html'));
});

module.exports = router;
