let apiCtrl = require('../app/api/api.ctrl');
var config= require('./config');

module.exports=function(app){
    app.post('/api/getPNR',apiCtrl.getPNR);
} 