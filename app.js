const storage = new Storage();
const newLoc = storage.getLoc();
let weather = new Weather(newLoc);
const ui = new UI();

document.addEventListener("DOMContentLoaded", getWeather);

document.getElementById("w-change-btn").addEventListener("click", (e) => {
  const city = document.getElementById("city").value;
  weather.changeLoc(city);
  storage.setLoc(city);

  getWeather();

  $("#locModal").modal("hide");
});

function getWeather() {
  weather
    .getWeather()
    .then((result) => {
      ui.paint(result);
      console.log(result);
    })
    .catch((err) => console.log(err));
}
