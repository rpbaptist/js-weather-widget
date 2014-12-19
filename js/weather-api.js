var WeatherApi = function(){
	this.apiKey = "";
	this.url = "http://api.openweathermap.org/data/2.5/";
}

WeatherApi.prototype.getForecast = function(cityId) {
	var requestUrl = this.url + "forecast/daily?id=" + cityId + "&cnt=16&APPID=" + this.apiKey;
	return $.ajax({
		url: requestUrl,
		type: "GET"
	});
}