const express = require('express')
const router = express.Router();
const { Book, validateBook } = require('../model/books')
//POST
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
//GET ALL
router.get("/", (req, res) => {
    Book.find().then((book) => res.send(book)).catch((err) => {
        res.status(500).send("Err")
    })
    res.setHeader('Access-Control-Allow-Origin', '*');
})

//GET by ID
router.get("/:id", async (req, res) => {
    const book = await Book.findById(req.params.id)
    if (!book)
        res.status(404).send('Not found')
    else
        res.send(book)
})


//Update
router.put("/:id", async (req, res) => {
    const updateBook = await Book.findByIdAndUpdate(req.params.id, {
        name: req.body.bookName,
        author: {
            name: req.body.authorName,
            name: req.body.authorDate
        },
        genre: req.body.genre

    }, { new: true })
    if (!updateBook)
        res.status(404).send("Not found")
    else
        res.send(updateBook)
})


//delete
router.delete("/:id", async (req, res) => {
    const book = await Book.findByIdAndRemove(req.params.id)
    if (!book)
        res.status(404).send("Not found")
    else
        res.send(book)
})
module.exports = router

