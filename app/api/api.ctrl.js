var config= require('../../config/config');
var apiconfig = require('./apiconfig')
var request=require('request');
var apiCtrl = {};

 apiCtrl.getPNR = function (req, res) {
     console.log("inside pnr function");
     console.log(req.body);
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

 apiCtrl.getLiveTrainStatus = function (req, res) {
     console.log("inside Live Status function");
    var trainNumber = req.body.trainNumber;
    var date =req.body.date;
    console.log(`https://api.railwayapi.com/v2/live/train/${trainNumber}/date/${date}/apikey/${apiconfig.apikey}/`);
   request.get((`https://api.railwayapi.com/v2/live/train/${trainNumber}/date/${date}/apikey/${apiconfig.apikey}/`),function(err,apires,body){ 
               
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
apiCtrl.getTrainsList = function (req, res) {
     console.log("inside Trains list function");
     console.log(req.body);
    var trainNumber = req.body.trainNumber;
    var date =req.body.date;
   request.get((`https://api.railwayapi.com/v2/suggest-train/train/${trainNumber}/apikey/${apiconfig.apikey}/`),function(err,apires,body){ 
         if(err) 
            {
                console.log("error");
                return res.send(420);
             }//TODO: handle err
        if(res.statusCode !== 200 ) //etc
            {
                console.log("not success");
                return res.send(420);
            }
        if(res.statusCode == 200 ) //etc
            {
                console.log("success");
                 return res.send(body);
            }
                
        } );
    
 } 
apiCtrl.getTrainRoute = function (req, res) {
     console.log("inside train route function");
    var trainNumber = req.body.trainNumber;
   request.get((`https://api.railwayapi.com/v2/route/train/${trainNumber}/apikey/${apiconfig.apikey}/`),function(err,apires,body){ 
               
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
apiCtrl.getSeatAvailability = function (req, res) {
     console.log("inside seat availability function");
     console.log(req.body);
    var trainNumber = req.body.trainNumber;
    var srcCode = req.body.srcCode;
    var dstCode = req.body.dstCode;
    var date =req.body.date;
    var classCode = req.body.classCode;
    var quota =req.body.quota;
   request.get((`https://api.railwayapi.com/v2/check-seat/train/${trainNumber}/source/${srcCode}/dest/${dstCode}/date/${date}/pref/${classCode}/quota/${quota}/apikey/${apiconfig.apikey}/`),function(err,apires,body){ 
               
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
                console.log(body);
                 return res.send(body);
            }
                
        } );
    
 } 
apiCtrl.getTrainBetweenStations = function (req, res) {
     console.log("inside getTrainBetweenStations function");
     var srcCode = req.body.srcCode;
    var dstCode = req.body.dstCode;
    var date =req.body.date;
    console.log(`https://api.railwayapi.com/v2/between/source/${srcCode}/dest/${dstCode}/date/${date}/apikey/${apiconfig.apikey}/`);
   request.get((`https://api.railwayapi.com/v2/between/source/${srcCode}/dest/${dstCode}/date/${date}/apikey/${apiconfig.apikey}/`),function(err,apires,body){ 
               
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
apiCtrl.getStationsList = function (req, res) {
     console.log("inside Stations list function");
     console.log(req.body);
    var stationName = req.body.name;
   request.get((`https://api.railwayapi.com/v2/suggest-station/name/${stationName}/apikey/${apiconfig.apikey}/`),function(err,apires,body){ 
         if(err) 
            {
                console.log("error");
                return res.send(420);
             }//TODO: handle err
        if(res.statusCode !== 200 ) //etc
            {
                console.log("not success");
                return res.send(420);
            }
        if(res.statusCode == 200 ) //etc
            {
                console.log("success");
                 return res.send(body);
            }
                
        } );
    
 } 
apiCtrl.getLiveStation = function (req, res) {
     console.log("inside Live Station function");
     console.log(req.body);
    var stationName = req.body.srcCode;
    var hours = req.body.hours;
   request.get((`https://api.railwayapi.com/v2/arrivals/station/${stationName}/hours/${hours}/apikey/${apiconfig.apikey}/`),function(err,apires,body){ 
         if(err) 
            {
                console.log("error");
                return res.send(420);
             }//TODO: handle err
        if(res.statusCode !== 200 ) //etc
            {
                console.log("not success");
                return res.send(420);
            }
        if(res.statusCode == 200 ) //etc
            {
                console.log("success");
                 return res.send(body);
            }
                
        } );
    
 } 
apiCtrl.getCancelledTrains = function (req, res) {
     console.log("inside cancelled trains function");
     console.log(req.body);
    var date = req.body.date;
   request.get((`https://api.railwayapi.com/v2/cancelled/date/${date}/apikey/${apiconfig.apikey}/`),function(err,apires,body){ 
         if(err) 
            {
                console.log("error");
                return res.send(420);
             }//TODO: handle err
        if(res.statusCode !== 200 ) //etc
            {
                console.log("not success");
                return res.send(420);
            }
        if(res.statusCode == 200 ) //etc
            {
                console.log("success");
                 return res.send(body);
            }
                
        } );
    
 } 
apiCtrl.getRescheduledTrains = function (req, res) {
     console.log("inside Rescheduled trains function");
     console.log(req.body);
    var date = req.body.date;
   request.get((`https://api.railwayapi.com/v2/rescheduled/date/${date}/apikey/${apiconfig.apikey}/`),function(err,apires,body){ 
         if(err) 
            {
                console.log("error");
                return res.send(420);
             }//TODO: handle err
        if(res.statusCode !== 200 ) //etc
            {
                console.log("not success");
                return res.send(420);
            }
        if(res.statusCode == 200 ) //etc
            {
                console.log("success");
                 return res.send(body);
            }
                
        } );
    
 } 
apiCtrl.getTrainFare = function (req, res) {
    console.log("inside train fare function");
    console.log(req.body);
    var trainNumber = req.body.trainNumber;
    var srcCode = req.body.srcCode;
    var dstCode = req.body.dstCode;
    var date =req.body.date;
    var classCode = req.body.classCode;
    var quota =req.body.quota;
    var age =req.body.age;
   request.get((`https://api.railwayapi.com/v2/fare/train/${trainNumber}/source/${srcCode}/dest/${dstCode}/age/${age}/pref/${classCode}/quota/${quota}/date/${date}/apikey/${apiconfig.apikey}/`),function(err,apires,body){ 
               
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
                console.log(body);
                 return res.send(body);
            }
                
        } );
    
 } 
module.exports = apiCtrl;
