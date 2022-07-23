let weather = {
    apiKey: "84b79da5e5d7c92085660485702f4ce8";
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city + "&appid=" + this.apiKey)
        .then((response) => {
            if (!response.ok) {
                alert("Are you sure that's a city?");
            }
            return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
displayWeather: function (data) {
    const {name} = data; 
    const {icon, description} = data.weather[0];
    const {temp, humidity} = data.main;
    const {speed} = data.wind;
    document.querySelector(".city-name");
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".temperature").innerText = temp + "°F";
    document.querySelector(".humidity").innerText= "Humidity: " + humidity + "%";
    document.querySelector(".wind-speed").innerText = "Wind speed: " + speed + " km/h";
    document.querySelector(".uv-index").innerText = "UV Index: " + uv;
}




}
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history

// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index

// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe

// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity

// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city



