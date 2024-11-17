'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const rendererError = function(msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  //countriesContainer.style.opacity = 1;
}
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
  // countriesContainer.style.opacity = 1;
};
///////////////////////////////////////
/*
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

//Big Build

/*
const getCountryData = function(country){
  //country 1
  fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
    .then(response => {
      console.log(response)
      if(!response.ok)
        throw new Error (`Country not found Status: ${response.status}`)

      return response.json()
    })
    .then(data => {
      renderCountry(data[0]);
      //const neighbour = data[0].borders[0];
      const neighbour = 'asdasds'
      if (!neighbour) return;

      //Country 2
      return fetch(`https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`);
    })
    .then(response => {
      console.log(response)
      if (!response.ok)
        throw new Error(`Country not found Status: ${response.status}`)

      return response.json()
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.log(`${err} LOLOLOL`);
      rendererError(
        `Something went wrong: ${err.message} Try Again!`)
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;

    });
};

btn.addEventListener('click',function(){
  getCountryData('portugal');
});

*/

const getJSON = function(url, errorMsg = 'Something went wrong'){
  return fetch(url).then(response =>{if(!response.ok)
    throw new Error (`${errorMsg} Status: ${response.status}`)

  return response.json()
  });
};

const getCountryData = function(country){
  //country 1

  getJSON(`https://countries-api-836d.onrender.com/countries/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      //const neighbour = 'asdasds'

      if (!neighbour) throw new Error('No neighbour found!');

      //Country 2
      return getJSON(`https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`, "Country not found");
    })

    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.log(`${err} LOLOLOL`);
      rendererError(
        `Something went wrong: ${err.message} Try Again!`)
      })
    .finally(() => {
      countriesContainer.style.opacity = 1;

    });
    };

btn.addEventListener('click',function(){
  getCountryData('Australia');
});

//getCountryData('australia');