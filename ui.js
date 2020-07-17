class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.maxTemp = document.getElementById("w-maxtemp");
    this.minTemp = document.getElementById("w-mintemp");
    this.feel = document.getElementById("w-feels-like");
    this.wind = document.getElementById("w-wind");
  }
  paint(weather) {
    this.location.textContent = `${weather.name} , ${weather.sys.country}`;
    this.desc.textContent = weather.weather[0].description;
    this.string.textContent = `${
      Math.round((weather.main.temp - 273.15) * (9 / 5)) + 32
    } F (${Math.round(weather.main.temp - 273.15)} C)`;
    this.icon.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    );
    this.humidity.textContent = `Relative humidity: ${weather.main.humidity}%`;
    this.maxTemp.textContent = `Max Temperature: ${
      Math.round((weather.main.temp_max - 273.15) * (9 / 5)) + 32
    } F (${Math.round(weather.main.temp_max - 273.15)} C)`;
    this.minTemp.textContent = `Min Temperature: ${
      Math.round((weather.main.temp_min - 273.15) * (9 / 5)) + 32
    } F (${Math.round(weather.main.temp_min - 273.15)} C)`;
    this.feel.textContent = `Feels Like: ${
      Math.round((weather.main.feels_like - 273.15) * (9 / 5)) + 32
    } F (${Math.round(weather.main.feels_like - 273.15)} C)`;
    this.wind.textContent = `Wind: ${Math.round((weather.wind.speed * 36) / 10)} km/h`;
  }
}
