var weatherApiKey = "&appid=ae4879e8655b7e980953ca0c4c9ef05f";
var weatherUrlTest = "http://api.openweathermap.org/data/2.5/weather?q=fremont"
var cityTest = "fremont"
var fullUrl;
var url;
// Test - "api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}"
//http://api.openweathermap.org/data/2.5/weather?q=fremontappid=ae4879e8655b7e980953ca0c4c9ef05f

var date;
var icon;
var temperature;
var humidity;
var windSpeed;
var today = dayjs().format('MM-DD-YYYY');
$('#current-day').text(today);


var weatherApiUrlTest = function (city){
   var cityInput = $("#city-input").val();
   var baseApiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=ae4879e8655b7e980953ca0c4c9ef05f";
    fetch(baseApiUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log("response", response);
      console.log("data", data);
    })
}


//fiveday forecast - 06.10.stu-demo-dynamic
function fiveDayForecast() {
   var city = $("#search-input").val();
      var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + weatherApiKey;

      $("#weather-forecast").empty();
      fetch(apiUrl)
      .then(function(response){
         return response.json();
      })
      .then(function(data){
         console.log(data)
         var index = 1;
         for (var i=7; i<data.list.length; i+=8) {
            var weather = data.list[i]
            var fiveDayForecast = $("#5-day-forecast-data");
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
         }
      });
}
//I created elements in function because I was getting confused with vars at top.

//$("<>) creates a new element. src:"https://stackoverflow.com/questions/15466731/jquery-what-is-the-difference-between-p-and-p"

$(document).ready(function(){
   var searchButton = $("#search-button");
   searchButton.on("click", function(){
      var searchValue = $('#search-button').val();
      console.log(searchValue);
   })
})


// $("<th></th>)
// var imageEl = $(<img>) path day.weather[0].icon(".png").append(imageEl);

//searchSubmitEl.addEventListener('submit', cityData)

// test
