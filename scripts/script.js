const apiKey = "19a38dae439d924e8782db36e2230a40";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(cityName) {
  const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector('.error').style.display = 'block';
    document.querySelector('.weather').style.display = 'none';
  } else {
    let data = await response.json();

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = `${data.main.humidity} %`;
    document.querySelector('.wind').innerHTML = `${data.wind.speed} km/h`;

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "assets/clouds.png";
    }
    else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "assets/clear.png";
    }
    else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "assets/rain.png";
    }
    else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "assets/drizzle.png";
    }
    else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "assets/mist.png";
    }

    document.querySelector('.weather').style.display = "block";
  }

}

searchBtn.addEventListener('click', () => {
  checkWeather(searchBox.value);
});
