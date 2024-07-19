const express = require('express');
const { body, validationResult } = require('express-validator');
const sanitizeHtml = require('sanitize-html');
const router = express.Router();

router.get('/message', (req, res) => {
  res.json({ message: 'Hello from the API' });
});

router.post('/data', [
  body('email').isEmail(),
  body('password').isLength({ min: 5 })
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const sanitizedEmail = sanitizeHtml(req.body.email);
  const sanitizedPassword = sanitizeHtml(req.body.password);

  res.json({ message: 'Data received', email: sanitizedEmail, password: sanitizedPassword });
});

module.exports = router;


