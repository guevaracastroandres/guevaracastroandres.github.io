const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
	.then(function (response) {
		return response.json();
	})

	.then(function (jsonObject) {
		const towns = jsonObject['towns'];
		for (let i = 0; i <towns.length; i++) {
			if (towns[i].name === "Preston" || towns[i].name === "Soda Springs" || towns[i].name === "Springfield"){
            
                let town = document.createElement('section');
                let h3 = document.createElement('h3');
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');
                let image = document.createElement('img');

			h3.textContent = towns[i].name;
            p1.textContent = "Year Founded: " + towns[i].yearFounded;
            p2.textContent = "Population: "+  towns[i].currentPopulation;
            p3.textContent = "Annua Rain Fall: " + towns[i].averageRainfall;
            image.setAttribute('src', 'images/' + towns[i].photo);
            image.setAttribute('alt', towns[i].name + 'img');

			town.appendChild(h3);
			town.appendChild(p1);
			town.appendChild(p2);
			town.appendChild(p3);
			town.appendChild(image);

			document.querySelector('div.towns').appendChild(town);
            }
		}
	})