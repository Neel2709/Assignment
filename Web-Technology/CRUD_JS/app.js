const express = require("express")
const mongoose = require("mongoose")
const url = 'mongodb://localhost/Training'

const app = express()

var parser=require("body-parser");
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection

con.on('open',() => {
    console.log('Connected....')
})

app.use(express.json())

const userRouter = require('./routes/users')
app.use('/users',userRouter)

app.listen(9000,() => {
    console.log("Server Started...")
})