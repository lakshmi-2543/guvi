let form = document.getElementById('form');
let inputCity = document.getElementById('inputCity');
let weatherContainer = document.getElementById('weatherContainer');

let API_KEY = '154e686224d1ab2fc48a66bd5388fdec';

function getWeather(city) {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('City not found');
      }
      return response.json();
    });
}

function displayWeather(data) {
  let weatherCard = document.createElement('div');
  weatherCard.classList.add('weather-card');

  let cityName = document.createElement('h2');
  cityName.textContent = data.name;

  let temperature = document.createElement('p');
  temperature.textContent = `Temperature: ${data.main.temp}°C`;

  let weatherDescription = document.createElement('p');
  weatherDescription.textContent = `Description: ${data.weather[0].description}`;

  weatherCard.appendChild(cityName);
  weatherCard.appendChild(temperature);
  weatherCard.appendChild(weatherDescription);

  weatherContainer.innerHTML = '';
  weatherContainer.appendChild(weatherCard);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let city = inputCity.value;

  getWeather(city)
    .then(data => displayWeather(data))
    .catch(error => {
      weatherContainer.innerHTML = `<p>${error.message}</p>`;
    });

  form.reset();
});

