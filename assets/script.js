var weatherApiKey = "&appid=ae4879e8655b7e980953ca0c4c9ef05f";
var weatherUrlTest = "http://api.openweathermap.org/data/2.5/weather?q=fremont"
var cityTest = "fremont"
var fullUrl;
var cityInput = $("#city-input").val();
var url;
// Test - "api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}"
//http://api.openweathermap.org/data/2.5/weather?q=fremontappid=ae4879e8655b7e980953ca0c4c9ef05f
var cityFormContainer = document.getElementById("city-form-container");
var getCityDataTest;
var latLongAPI;
var date;
var icon;
var temperature;
var humidity;
var windSpeed;
var today = dayjs().format('MM-DD-YYYY');
$('#current-day').text(today);

// get current weather 

//create search url to input to forecast...
var weatherApiUrl = function resultUrl(url){
   var baseApiUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
   var url = baseApiUrl + cityInput + weatherApiKey;
   console.log(url); // test if working
}
console.log(weatherApiUrl);



//fiveday forecast
function fiveDayForecast() {
   cityInput = $("#city-input").val();
      var urlTest = "http://api.openweathermap.org/data/2.5/weather?q="+cityInput+weatherApiKey;
      var weatherContainer = $("#weather-forecast").empty();
      fetch(urlTest)
      .then(function(response){
         return response.json();
      })
      .then(function(data){
         console.log(data)
      })
      var index = 1;
      for (var i=7; i<data.list.length; i+=8){
         var weather = data.list[i]
         var fiveDayForecast = $("<div>").att("id", "card-"+index);
         var date = $("<p></p>").text(dayjs.unix(weather.dt).format("MM-DD-YYYY"))
         fiveDayForecast.apend(date);
         var temp = $("<p></p>").text("Temp: "+ weather.main.temp)
         fiveDayForecast.apend(temp);
         var wind = $("<p></p>").text("Wind: "+weather.wind.speed)
         fiveDayForecast.apend(wind);
         var humidity = $("<p></p>").text("Humidity: "+day.main.humidity)
         fiveDayForecast.apend(humidity);
         var image = $("<img>").attr("src","https://openweathermap.org/img/wn/")+day.weather
         fiveDayForecast.apend(image);
         $("#weather-forecast").append(fiveDayCard);
         index++;
}console.log(weatherContainer);
}
fiveDayForecast();



cityInput.eventListenerFunction ("input", function typeTest() {
   var pleaseWork = typeTest.target.value
   console.log(pleaseWork)
}) 



var searchButton = document.getElementById("search-button");
searchButton.addEventListener("submit", resultUrl)

//presented with a 5-day forecast displaying the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity

//get future weather



// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city



// $("<th></th>)
// var imageEl = $(<img>) path day.weather[0].icon(".png").append(imageEl);

//searchSubmitEl.addEventListener('submit', cityData)

// test
