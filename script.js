const apiKey = "cfe92ed28239598730f9ac578e7a426c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

function getWeather() {
    const city = document.getElementById("cityInput").value;

    if (!city) {
        document.getElementById("WeatherResult").innerHTML = `<p>Please enter a city name</p>`;
        return;

    }

    const url = `${apiUrl}?q=${city}&appid=${apiKey}&units=metric`;


    fetch (url) 

        .then(response => {
            if (!response.ok) {
                throw new Error("City not found")
            }
            return response.json();
        })

        .then (data => {
            displayWeather(data);
        })

        .catch (error => {
            document.getElementById("WeatherResult").innerHTML =   `<p>${error.message}</p>`;
        });

}


function displayWeather(data) {

    const weatherResult = document.getElementById("WeatherResult");
    const city = data.name;
    const temp = data.main.temp;
    const desc = data.weather[0].description;
    const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

    weatherResult.innerHTML = `
        <h2>${city}</h2>
        <p>Temperature: ${temp}°C</p>
        <p>Weather: ${desc}</p>
        <img src="${icon}" alt="Weather icon" style="width: 50px; height: 50px;">
    `;
}


