function initPage () {
    let cityName = document.getElementById(".city-name");
    let currentPic = document.getElementById(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    let currentTemp = document.getElementById(".temperature").innerText = temp + "°F";
    let currentHum = document.getElementById(".humidity").innerText= "Humidity: " + humidity + "%";
    let currentWind = document.getElementById(".wind-speed").innerText = "Wind speed: " + speed + " MPH";
    let currentUv = document.getElementById(".uv").innerText = "UV Index: " + uv;
    let searchEl = document.getElementById("search-button");
    let clearEl = document.getElementById("clear-history");
    let searchHis = JSON.parse(localStorage.getItem)("search") || [];
}




