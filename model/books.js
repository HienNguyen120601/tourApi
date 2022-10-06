const mongoose = require('mongoose')
const Author = require('./author')
const yup = require('yup')
const bookschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: Author.schema,
    genre:
    {
        type: String,
        require: true
    }
})

const validateBook = (book) => {
    const schema = yup.object().shape({
        bookName: yup.string().required(),
        authorName: yup.string().required(),
        authorDate: yup.string().required(),
        genre: yup.string().required()
    })
    return schema.validate(book).then(book => book).catch((err) => {
        return { message: err.message }
    })
}

exports.Book = new mongoose.model("Book", bookschema)
exports.validateBook = validateBook