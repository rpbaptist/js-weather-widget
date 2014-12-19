 $(document).ready(function(){
 	var view = new WeatherView($("#forecast"));
 	var weatherApi = new WeatherApi();
 	var date = "";

 	$("#unit-select span").click(function() {
 		var unit = $(this).attr('id');
 		if (view.unit != unit) { view.selectUnit(unit) }
 	});

 	$('#update-weather').submit(function(event) {
 		event.preventDefault();
	 	var cityId = $('#city-id').val();
 		weatherApi.getForecast(cityId).done(function(response) {
 			view.render(response);
 		}).fail(function(response) {
 			console.log(response);
 		});
 	});
 });