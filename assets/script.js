// VARIABLES (GLOBAL)
var weatherApiKey = "&apikey=ae4879e8655b7e980953ca0c4c9ef05f";
var apiBaseUrl = "http://api.openweathermap.org/data/2.5/weather?q="
var inputEl = document.getElementById("search-input");
var formEl = document.getElementById("search-form");
var currentContainer = document.getElementById('current')



// FUNCTIONS
// the user fills out the form we need to capture the value of the input
function handleUserInput(event) {
   event.preventDefault()
   var inputData = inputEl.value

   runApi(inputData);
}

//101001011001101

function runApi(cityInput) {

   fetch(apiBaseUrl + cityInput + weatherApiKey).then(function (res) {
      return res.json()
   }).then(function (data) {
      console.log(data);
      // create elements. temperatureEl, humidityEl, windEl, dateEl, iconEl 
      //dateEl in Unix, convert to MM-DD-YYYY format
      //attach elements to 'currentContainer'
      var h2El = document.createElement('h2') 
      
      // add text content to the element
      h2El.textContent = data.name;
      // append the element to the currentContainer

      currentContainer.append(h2El)
   })
}


// EVENT LISTENERS
formEl.addEventListener("submit", handleUserInput);
