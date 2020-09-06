const request = require('request')
const constants = require('../config')

const weatherData = (address, callback) => {
	const url = constants.openWeatherMap.BASE_URL + encodeURIComponent(address) + '&appid=' + constants.openWeatherMap.SECRET_KEY;
	request({url, json:true}, (error, {body})=>{
		console.log(body)
		if(error){
			callback("can fetch data", undefined)
		}
		else if (!body.name){
			callback("Unable To Retrive Data Try Another Location", undefined)
		}
		else{
			callback(undefined, {
				temprature: body.main.temp,
				description: body.weather[0].description,
				cityName: body.name

			})
		}
	})
}

module.exports = weatherData;