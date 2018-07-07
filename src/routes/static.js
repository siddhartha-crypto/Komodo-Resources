const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res, next) => {
  res.send(path.join(__dirname, '../../index.html', process.env.testDBPassword));
});

module.exports = router;
