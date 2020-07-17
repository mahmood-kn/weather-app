class Weather {
  constructor(city) {
    this.api = "eed47c9de4ce80e250dc0baa00d66565";
    this.city = city;
  }
  async getWeather() {
    const resp = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.api}`
    );

    const respData = await resp.json();
    return respData;
  }

  changeLoc(city) {
    this.city = city;
  }
}
