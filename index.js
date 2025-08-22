const express = require('express');
require('dotenv').config()
const db = require('./configs/db');
const bodyParser = require('body-parser');
const app = express();
const port = 8081;

app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',require('./router/index'))

app.listen(port,(err)=>{
    if(!err){
        console.log("Server started..")
        console.log("http://localhost:"+port)
    }
})