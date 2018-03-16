var express=require('express');
var bodyParser=require('body-parser');
var cors =require('cors');
module.exports=function(){
    var app=express();
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());
    app.use(cors());
    require('./routes')(app)
    return app;
}