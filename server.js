const express = require('express')
const dotenv = require("dotenv").config()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser: true})
const db = mongoose.connection
db.on('error',error=>{console.error(error)})
db.once('open',()=>{console.log('connected to mongo DB')})

const app = express();

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true, limit: '1mb'}))
app.use(bodyParser.json())

const indexRouter = require('./routes')
app.use('/',indexRouter)

const postRouter = require('./routes/post_routes')
app.use('/post',postRouter)

module.exports = app

