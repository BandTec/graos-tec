const express = require('express');
const { ArduinoData } = require('./serial')
const router = express.Router();


router.get('/temperature', (request, response, next) => {
	
	let listTemperature = ArduinoData.List.map((item) => item.temperature);
	
    let sum = listTemperature.reduce((a, b) => a + b, 0);
    let average = (sum / listTemperature.length).toFixed(2);

    response.json({
        data: listTemperature,
        total: listTemperature.length,
        average: isNaN(average) ? 0 : average
    });

});

router.get('/humidity', (request, response, next) => {
	
	let listHumidity =  ArduinoData.List.map((item) => item.humidity);
	
    let sum = listHumidity.reduce((a, b) => a + b, 0);
    let average2 = (sum / listHumidity.length).toFixed(2);

    response.json({
        data: listHumidity,
        total: listHumidity.length,
        average2: isNaN(average2) ? 0 : average2
    });

});

module.exports = router;