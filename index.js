const express = require('express')

const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
var bodyParser = require('body-parser')



app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("common"))


const bookRouter = require('./router/book')


mongoose.connect("mongodb+srv://c2star07:hiennguyen123@cluster0.n0rogqq.mongodb.net/bookdb?retryWrites=true&w=majority").then(() => {
    console.log("Success connect mongodb")
})
app.use('/api/book', bookRouter)
app.get('/', (req, res) => {
    res.send('helo')
}
)
const PORT = process.env.PORT || 9001
app.listen(PORT, () => {
    console.log('Sever is running....', PORT)
})