const express = require('express');
const users = require('../services/users');
const router  = express.Router();

router.get('/', async function(req, res, next) {
    try {
        res.json((await users.getAll(req.query.index)));
    } catch (err) {
        res.json(`Error while getting users: ${err.message}`);
        next(err);
    }
})

module.exports = router;