const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }

})
module.exports = new mongoose.model("Author", authorSchema)