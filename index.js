var express=require('express');
var mongoose=require('mongoose');
var bodyparser=require('body-parser');
var cors=require('cors');
var path=require('path');
 var app=express();
 require('./config/config');
 require('./models/db');

const route=require('./routes/route');

 const port=3000;



//testing server
app.get('/',(req,res)=>{
    res.send('foobar');
})

 app.listen(port,()=>{
     console.log('Server started at port:'+port);
 })