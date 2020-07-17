class Storage {
  constructor() {
    this.city;
    this.defaultCity = "Tehran";
  }
  setLoc(city) {
    localStorage.setItem("city", city);
  }

  getLoc() {
    if (localStorage.getItem("city") === null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem("city");
    }
    return this.city;
  }
}
