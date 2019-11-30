const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5678757&units=imperial&appid=2afa5d24984f80fb6680569b9d2e8a22"
fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        for (let i = 0; i< jsObject.list.length; i++) {
            if (jsObject.list[i].dt_txt.includes('18:00:00')) {
                let card = document.createElement('section');
                let image = document.createElement('img');
                let p1 = document.createElement('p');
                let iconsrc = 'https://openweathermap.org/img/wn/' + jsObject.list[i].weather[0].icon + '@2x' + '.png';
                let iconalt = jsObject.list[i].weather[0].description;
                let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
                let d = new Date(jsObject.list[i].dt_txt);
                let nameOfDay = days[d.getDay()];
                let weekday = document.createElement('h4');

                weekday.textContent = nameOfDay;
                p1.innerHTML = 'High: ' +  Math.floor(jsObject.list[i].main.temp_max) + '&#176;F' + '<br>' + 'Low: ' +  Math.floor(jsObject.list[i].main.temp_min) + '&#176;F';
                image.setAttribute('src', iconsrc);
                image.setAttribute('alt', iconalt);
                
                card.appendChild(weekday);
                card.appendChild(image);
                card.appendChild(p1);
                document.querySelector('div.forecastdiv').appendChild(card);
            }
        }
        
    });