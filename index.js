const express = require('express')
const router = require('./router/router')
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

app.use("/router/router", router)
const PORT = process.env.PORT || 9001
app.listen(PORT, () => {
    console.log('Sever is running....', PORT)
})