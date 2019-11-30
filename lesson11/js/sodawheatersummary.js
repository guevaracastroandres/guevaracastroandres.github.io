const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5678757&units=imperial&APPID=2afa5d24984f80fb6680569b9d2e8a22";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {

    var high = Math.round(jsObject.main.temp);
    document.getElementById('Shigh').textContent = high;

    var speed = jsObject.wind.speed;
    document.getElementById('Sspeed').textContent = speed;
    
    var humidity = jsObject.main.humidity;
    document.getElementById('Shumidity').textContent = humidity +"%";

    document.getElementById('Scurrently-temp').textContent= jsObject.weather[0].description;

    const tempF = jsObject.main.temp;
    const wSpeed = jsObject.wind.speed;
    const windChill = getWindChill(tempF,wSpeed);

    document.getElementById('Swc').textContent = windChill;
});