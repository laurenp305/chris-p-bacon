function initPage () {
    let cityName = document.getElementById("#city-name");
    let currentPic = document.getElementById("#icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    let currentTemp = document.getElementById("#temperature").innerText = temp + "°F";
    let currentHum = document.getElementById("#humidity").innerText= "Humidity: " + humidity + "%";
    let currentWind = document.getElementById("#wind-speed").innerText = "Wind speed: " + speed + " MPH";
    let currentUv = document.getElementById("#uv").innerText = "UV Index: " + uv;
    let searchEl = document.getElementById("#search-button");
    let clearEl = document.getElementById("#clear-history");
    let todaysWeather = document.getElementById("#todays-weather");
    var daysHeader = document.getElementById("days-header");
    let searchHis = JSON.parse(localStorage.getItem)("#search") || [];

    //API Key//
    const APIKey = "84b79da5e5d7c92085660485702f4ce8";

    function weather(city) {
        //Retrieves weather info from API
        const queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;
        fetch(queryUrl)
        .then(function (response) {
            todaysWeather.classList;

            //Considers the date to produce weather information
            let currentDate = new Date(response.data.dt * 1000);
            let day = currentDate.getDay();
            let month = currentDate.getMonth() +1;
            let year = currentDate.getFullYear();
            cityName.innerHTML = response.data.name + " (" + month + "/" + day + "/" + year + ")";
            let currentPic = response.data.weather[0].icon;
            currentPic.setAttribute("alt", response.data.weaher[0].description);
            currentTemp.innerHTML = "Temperature:" + k2f(response.data.main.temp) + " &#176F";
            currentHum.innerHTML = "Humidity: " + response.data.main.humidity + "%";
            currentWind.innerHTML = "Wind Speed: " + response.data.wind.speed + " MPH";


        //UV index function
        let latitude = response.data.cord.lat;
        let longitude = response.data.cord.lon;
        let UvQueryUrl = "https://api.openweathermap.org/data/2.5/uvi/forecast?lat=" + latitude + "&lon=" + longitude + "&appid=" + APIKey + "&cnt=1";
        fetch(UvQueryUrl)
            .then(function (response) {
                let UvIndex = document.createElement("span");

            //Color coding for UV: green is good, yellow is okay, red is bad
            if (response.data[0].value < 4) {
                UvIndex.setAttribute("class", "badge badge-success");
            } 
                else if (response.data[0].value < 8) {
                    UvIndex.setAttribute("class", "badge badge-warning");
                }
            else {
                UvIndex.setAttribute("class", "badge badge-danger");
            }
            console.log(response.data[0].value)
            UvIndex.innerHTML = response.data[0].value;
            currentUv.innerHTML = "UV Index: ";
            currentUv.append(UvIndex);
            });
            
    //5 day forecast 

    let cityId = response.data.id;
    let forecastQueryUrl = "https://api.openweathermap.org/data/2.5/forecast?id=" + cityId + "&appid=" + APIKey;
    fetch(forecastQueryUrl)
    .then(function (response) {
        daysHeader.classList;

        //Displays forecast for all of the days 
        const forecastInfo = document.querySelectorAll(".forecast");
        for (i = 0; i < forecastInfo.length; i++) {
            forecastInfo[i].innerHTML = "";
        const forecastIndex = i * 8 * 4;
        const forecastCurrentDate = new Date(response.data.list[forecastIndexIndex].dt * 1000);
        const forecastCurrentDay = forecastCurrentDate.getDate();
        const forecastCurrentMonth = forecastCurrentDate.getMonth();
        const forecastCurrentYear = forecastCurrentDate.getFullYear();
        const forecastDateEl = document.createElement("p");
        forecastDateEl.setAttribute("class", "mt-3 mb-0 forecast-date");
        forecastDateEl.innerHTML = forecastCurrentMonth + "/" + forecastCurrentDay + "/" + forecastCurrentYear;
        forecastInfo[i].append(forecastDateEl);
        
        //Weather icon/current pic



            }
    }
            

        }
    }




}





