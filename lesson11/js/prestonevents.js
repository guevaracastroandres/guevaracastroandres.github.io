const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        for (let i=0; i<towns.length; i++) {
            if (towns[i].name == 'Preston') {
                let card = document.createElement('section');
                let h4 = document.createElement('h4');
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');

                h4.textContent = "Upcoming Events";
                p1.textContent = towns[i].events[0];
                p2.textContent = towns[i].events[1];
                p3.textContent = towns[i].events[2];

                card.appendChild(h4);
                card.appendChild(p1);
                card.appendChild(p2);
                card.appendChild(p3);
                
                document.querySelector('div.events').appendChild(card);

            }
        }});