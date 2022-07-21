function init() {
    let cityEl = document.getElementById("search-city");
    let searchEl = document.getElementById("search-button");
    let clearEl = document.getElementById("clear-history-button");
    let nameEl = document.getElementById("city-name");
    let currentTempEl = document.getElementById("temperature");
    let currentHumidityEl = document.getElementById("humidity");
    let currentWindEl = document.getElementById("wind-speed");
    let currentUVEl = document.getElementById("UV-index");
    let clearHistoryEl = document.getElementById("clear-history");
    var daysHeaderEl = document.getElementById("days-header");
    var todayWeatherEl = document.getElementById("todays-weather");
    let searchHistory = JSON.parse(localStorage.getItem("search")) || [];
    //API
    const apiKey = "84b79da5e5d7c92085660485702f4ce8";

// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
function getWeather(cityName) {
    const queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;
    fetch(queryURL)
    .then(response => response.json())
    .then(data => console.log(data));
    let todaysDate = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yy = today.getFullYear();
    nameEl.innerHTML = response.data.name + " (" + month + "/" + day + "/" + year + ") ";
    let weatherPic = response.data.weather[0].icon;
    currentPicEl.setAttribute("src", "https://openweathermap.org/img/wn/" + weatherPic + "@2x.png");
    currentPicEl.setAttribute("alt", response.data.weather[0].description);
    currentTempEl.innerHTML = "Temperature: " + k2f(response.data.main.temp) + " &#176F";
    currentHumidityEl.innerHTML = "Humidity: " + response.data.main.humidity + "%";
    currentWindEl.innerHTML = "Wind Speed: " + response.data.wind.speed + " MPH";
}

// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index

// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe

// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity

// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city

}

