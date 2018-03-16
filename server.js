var config=require("./config/config");
var express=require("./config/express");
// var mongose = require('./config/mongoose')();
var app=express();
app.listen(config.port);
console.log(`your port number is ${config.port}`);