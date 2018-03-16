var config= require('../../config/config');
var apiconfig = require('./apiconfig')
var request=require('request');
var apiCtrl = {};

 apiCtrl.getPNR = function (req, res) {
    var pnrNumber = req.body.pnr;
   request.get((`https://api.railwayapi.com/v2/pnr-status/pnr/${pnrNumber}/apikey/${apiconfig.apikey}/`),function(err,apires,body){ 
               
         if(err) 
            {
                console.log("error");
                
             }//TODO: handle err
        if(res.statusCode !== 200 ) //etc
            {
                console.log("not success");
            }
        if(res.statusCode == 200 ) //etc
            {
                console.log("success");
                 return res.send(body);
            }
                
        } );
    
 } 


module.exports = apiCtrl;
