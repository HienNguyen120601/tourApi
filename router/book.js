const express = require('express')
const router = express.Router();
const { Book, validateBook } = require('../model/books')
router.post('/', async (req, res) => {
    const err = await validateBook(req.body)
    if (err.message)
        res.status(400).send(err.message)
    book = new Book(
        {
            name: req.body.bookName,

            author: {
                name: req.body.authorName,
                date: req.body.authorDate
            },
            genre: req.body.genre
        }
    )
    book.save().then((book) => {
        res.send(book)
    })
        .catch((err) => {
            res.status(500).send(err)
        })


})
module.exports = router

