let apiCtrl = require('../app/api/api.ctrl');
var config= require('./config');

module.exports=function(app){
    app.post('/api/getPNR',apiCtrl.getPNR);
    app.post('/api/getLiveTrainStatus',apiCtrl.getLiveTrainStatus);
    app.post('/api/getLiveStation',apiCtrl.getLiveStation);
    app.post('/api/getTrainsList',apiCtrl.getTrainsList);
    app.post('/api/getStationsList',apiCtrl.getStationsList);
    app.post('/api/getTrainRoute',apiCtrl.getTrainRoute);
    app.post('/api/getSeatAvailability',apiCtrl.getSeatAvailability);
    app.post('/api/getTrainBetweenStations',apiCtrl.getTrainBetweenStations);
    app.post('/api/getCancelledTrains',apiCtrl.getCancelledTrains);
    app.post('/api/getRescheduledTrains',apiCtrl.getRescheduledTrains);
    app.post('/api/getTrainFare',apiCtrl.getTrainFare);
} 