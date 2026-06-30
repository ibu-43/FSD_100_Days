const apiKey = "906a6c87c787b24f7b49375149b3d0f7"; // get from OpenWeatherMap

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const result = document.getElementById("weatherResult");

// Event
searchBtn.addEventListener("click", getWeather);

// Function
async function getWeather() {
  const city = cityInput.value;

  if (!city) {
    alert("Enter a city name");
    return;
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    displayWeather(data);

  } catch (error) {
    result.innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}

// Display function
function displayWeather(data) {
  result.innerHTML = `
    <h2>${data.name}</h2>
    <p>🌡️ Temp: ${data.main.temp}°C</p>
    <p>🌥️ Weather: ${data.weather[0].description}</p>
    <p>💧 Humidity: ${data.main.humidity}%</p>
  `;
}