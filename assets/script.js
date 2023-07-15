var weatherApiKey = "ae4879e8655b7e980953ca0c4c9ef05f";
var apiBaseUrl = "http://api.openweathermap.org/data/2.5/weather?q="

var today = dayjs().format('MM-DD-YYYY'); //test
$('#current-day').text(today);

// var accurateUrl = "http://api.openweathermap.org/data/2.5/weather?q=fremont&appid=ae4879e8655b7e980953ca0c4c9ef05f"

// fetch(accurateUrl)
// .then(function(response){
// return response.json();
// })
// .then(function(data){
// console.log(data)
// })

//fiveday forecast - 06.10.stu-demo-dynamic
// function creates and links vars and elements of html.


function fiveDayForecast() {
   var city = $("#search-input").val();
      var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city +"&appid=" + weatherApiKey;

      $("#weather-forecast").empty();
      fetch(apiUrl)
      .then(function(response){
      return response.json();
      })
      .then(function(data){
      console.log(data)

      var index = 1;
      for (var i=7;  i < data.list.length; i+=8) {
         var weather = data.list[i]
         var fiveDayForecast = $("<div>").attr("id", "card-" + index);
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

function search() {
   var city = $("#search-input").val();
   var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city +"&appid=" + weatherApiKey;
   fetch(apiUrl)
   getCoordinates(city)
   .then(function(coordinates) {
      return getWeather(coordinates.lat, coordinates.lon);
   })
   .then(function(weatherData) {
      displayData(weatherData);
   })
   .catch(function(error) {
      console.log(error);
   });
}

//$("<>) creates a new element. src:"https://stackoverflow.com/questions/15466731/jquery-what-is-the-difference-between-p-and-p"

$(document).ready(function(){
   console.log("ready");
})

var searchButton = $("#search-button");
searchButton.on('click', fiveDayForecast());
searchButton.on('click', search());


//searchSubmitEl.addEventListener('submit', cityData)


