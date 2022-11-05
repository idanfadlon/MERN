const express = require('express')
const app = express();
const dotenv = require("dotenv").config()
const port = process.env.PORT

const indexRouter = require('./routes')
app.use('/',indexRouter)

const postRouter = require('./routes/post_routes')
app.use('/post',postRouter)

app.listen(port,()=>{
    console.log('server started on port '+ port)
});

