'use strict';

/*const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function(data, className = ''){
  const html = `        
        <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
        </article>`
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
///////////////////////////////////////

// Ajax Call Country 1
const getCountryAndNeighbour = function(country){
  const request = new XMLHttpRequest();
  request.open('GET', `https://countries-api-836d.onrender.com/countries/name/${country}`, true);
  request.send();
  request.addEventListener('load', function() {
    //console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render country 1
    renderCountry(data);

    const [neighbour] = data.borders
    console.log(neighbour);
    if(!neighbour)return;

    //Ajax Call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`)
    request2.send();

    request2.addEventListener('load', function() {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);
      renderCountry(data2, 'neighbour')

    })
  })
}


getCountryAndNeighbour('germany')
///////////////////////////////////////
// OLD = https://restcountries.eu/rest/v2/
// NEW = https://countries-api-836d.onrender.com/countries/
*/
/*
const request = new XMLHttpRequest();
request.open('GET', `https://countries-api-836d.onrender.com/countries/name/${country}`, true);
request.send();*/

const request = fetch('https://countries-api-836d.onrender.com/countries/name/portugal')
console.log(request)