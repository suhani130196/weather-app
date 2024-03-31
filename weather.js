const apiKey="eb04e5024a2c0c41831ce956eff9463b";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML =data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    console.log(data.weather[0])
    if (data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }else if (data.weather[0].main == "Wind"){
        weatherIcon.src = "images/wind.png";
    }else if (data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }else if (data.weather[0].main == "Snow"){
        weatherIcon.src = "images/snow.png";
    }else if (data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }else if (data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }else if (data.weather[0].main == "Humidity"){
        weatherIcon.src = "images/humidity.png";
    }else if (data.weather[0].main == "Thunderstorm"){
        weatherIcon.src = "images/thunderstorm.png";
    }
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
