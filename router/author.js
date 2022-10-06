const express = require('express')
const router = express.Router();
const Author = require('../model/author')
router.post('/', (req, res) => {
    author = new Author(
        {
            name: req.body.authorName,
            date: req.body.date,

        }
    )
})

module.exports = router