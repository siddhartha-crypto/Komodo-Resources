const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res, next) => {
  res.send(__dirname);
});

module.exports = router;
