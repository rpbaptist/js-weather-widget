var WeatherView = function(el) {
	this.el = el;
}

WeatherView.prototype.render = function(json) {
	var daysFromToday = 1
	var forecast = json.list[daysFromToday]
	var description = forecast.weather[0].description
	this.generateTemp(forecast);
	this.el.find("#description").text(description);
}

WeatherView.prototype.generateTemp = function(forecast) {
	this.setTemp(forecast.temp.day)
	var iconClass = this.getIconForId(forecast.weather[0].id);
	this.el.find('#icon').removeClass().addClass('wi ' + iconClass);
	this.selectUnit(this.selectedUnit);
}

WeatherView.prototype.setTemp = function(tempInKelvin) {
	var celsius = tempInKelvin - 273.15;
	this.units = {
		celsius: celsius,
		fahrenheit: (celsius * 1.80000) + 32
	};
	if (!(this.selectedUnit)) { this.selectedUnit = 'celsius' }
}

WeatherView.prototype.selectUnit = function(unit) {
	if (this.selectedUnit != unit) { this.selectedUnit = unit };
	tempAsString = parseInt(this.units[unit]);
	this.el.find('#temp-number').html(' ' + tempAsString +
		' <i class="wi wi-' + unit + '"></i>');
}

WeatherView.prototype.getIconForId = function(id) {
	var iconList = {
		800: "wi-day-sunny",
		801: "wi-day-cloudy",
		802: "wi-day-cloudy",
		803: "wi-day-cloud",
		804: "wi-cloudy",
		900: "wi-tornado",
		901: "wi-day-thunderstorm",
		902: "wi-hurricane",
		903: "wi-snowflake-cold",
		904: "wi-hot",
		905: "wi-strong-wind",
		906: "wi-hail",
		951: "wi-day-sunny",
		961: "wi-thunderstorm",
		962: "wi-hurricane"
	};
	if (id < 300) { return "wi-storm-showers" } else
	if (id < 500) { return "wi-rain-mix" } else
	if (id < 600) { return "wi-rain" } else
	if (id < 700) { return "wi-snow" } else
	if (id < 800) { return "wi-fog" } else
	if (id > 951 & id < 956) { "wi-day-windy" } else {
		return iconList[id];
	}
}

