const express = require('express')
const router = express.Router();
const mongoose = require('mongoose')
const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    book:
        [
            {
                type: mongoose.Schema.Types.ObjectId,

            }
        ]
})
let Author = mongoose.model("Author", authorSchema)

router.get('/', async (req, res) => {

    const author = await Author.find({})

    res.send('Hello')

})
module.exports = router
