const express = require('express')
const winston = require('winston')

const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')




app.use(express.json())
app.use(express.urlencoded({ extended: true }))


//create logger
const logger = winston.createLogger({
    lavel: 'info',
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize({ all: true })
            )
        }),
        new winston.transports.File({ filename: 'error.log', level: 'error' })
    ],
    exceptionHandlers: [
        new winston.transports.File({ filename: 'exeptions.log' })
    ]
})

const bookRouter = require('./router/book')



mongoose.connect("mongodb+srv://c2star07:hiennguyen123@cluster0.n0rogqq.mongodb.net/bookdb?retryWrites=true&w=majority")
    .then(() => {
        logger.log("info", "Connected to mongodb")
    })
    .catch((err) => {
        logger.log("error", "Something went wrong", err)
    })
app.use('/api/book', bookRouter)
app.get('/', (req, res) => {
    res.send('helo')
}
)
const PORT = process.env.PORT || 9001
app.listen(PORT, () => {
    logger.log("warn", `Sever is running....${PORT}`)
})