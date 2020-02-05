const express = require('express');
const authMiddleare = require('../middleware/auth');

const router = express.Router();

router.get('/', authMiddleare, (req, res) => {
    res.send({ ok: true })
});

module.exports = app => app.use('/wallet', router);