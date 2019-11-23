const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=2afa5d24984f80fb6680569b9d2e8a22";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {

    var high = Math.round(jsObject.main.temp);
    document.getElementById('high').textContent = high;

    var speed = jsObject.wind.speed;
    document.getElementById('speed').textContent = speed;
    
    var humidity = jsObject.main.humidity;
    document.getElementById('humidity').textContent = humidity +"%";

    document.getElementById('currently-temp').textContent= jsObject.weather[0].description;

    const tempF = jsObject.main.temp;
    const wSpeed = jsObject.wind.speed;
    const windChill = getWindChill(tempF,wSpeed);

    document.getElementById('wc').textContent = windChill;
});