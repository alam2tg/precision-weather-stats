var weatherApiKey = "&appid=ae4879e8655b7e980953ca0c4c9ef05f";
var weatherUrlTest = "http://api.openweathermap.org/data/2.5/weather?q=fremont"
var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q="
var cityTest = "fremont"
var city = cityInput
var cityInput;
// Test - "api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}"

var cityFormContainer = document.getElementById("city-form-container");
var getCityDataTest;
var latLongAPI;
var date = document.getElementById('Date');
var icon = document.getElementById('Condition');
var temperature = document.getElementById('Temp');
var humidity = document.getElementById('Wind');
var windSpeed = document.getElementById('Humidity');
var today = dayjs().format('M/D/YYYY');
$('#current-day').text(today);


// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history

// get current weather 

function fiveDayForecast() {
   cityInput = $("#city-input").val();
      var urlTest = "http://api.openweathermap.org/data/2.5/weather?q="+cityTest+weatherApiKey;
      $("#weather-forecast").empty();
      fetch(urlTest)
      .then(function(response){
         return response.json();
      })
      .then(function(data){
         console.log(data)
      })
      var index = 1;
      for (let i=7; i<data.list.length; i+=8){
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
}}
fiveDayForecast();


//presented with a 5-day forecast displaying the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity

//get future weather



// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city



// $("<th></th>)
// var imageEl = $(<img>) path day.weather[0].icon(".png").append(imageEl);

//searchSubmitEl.addEventListener('submit', cityData)

// test