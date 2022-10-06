const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(cors())
app.use(morgan("common"))
mongoose.connect("mongodb+srv://c2star07:hiennguyen123@cluster0.lo0jufq.mongodb.net/test", () => {
    console.log("Success connect mongodb")
})

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
                ref: "Book"
            }
        ]
})
let Author = mongoose.model("Author", authorSchema)
app.get('/', (req, res) => {
    res.send("hello")
})
app.get('/author', async (req, res) => {

    const author = await Author.find({})

    res.send(author)

})
const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log('Sever is running....', PORT)
})