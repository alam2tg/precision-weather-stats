var weatherAPIKey = "ae4879e8655b7e980953ca0c4c9ef05f";

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + weatherAPIKey;


var city = document.getElementById("cityInput"); 
var date;
var icon;
var temperature;
var humidity;
var windSpeed;

//presented with a 5-day forecast displaying the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity

var queryURL = "";

// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history

// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed

// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity

// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city