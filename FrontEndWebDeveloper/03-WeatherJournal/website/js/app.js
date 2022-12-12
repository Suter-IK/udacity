// import { Weather } from "./fakeWeather.js";
import { Weather } from "./realWeather.js";
import { formatSelect } from "./utils.js";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

let requestType = 'WeatherByZipCode';
const apiUnits = 'imperial';
let cityName = 'Zurich';
let zipCode = '8000';
let countryCode = 'CH';
let latitude = 39.234454;
let longitude = -99.438161;
let userResponse = 'no input';

const setGeoLocation = () => {
  if ('geolocation' in navigator) {
    requestType = 'WeatherByCoordinates';
    const geolocationOptions = { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 };
    navigator.geolocation.getCurrentPosition(
      pos => { latitude = pos.coords.latitude; longitude = pos.coords.longitude; },
      err => { requestType = `not available, geolocation failed:${err.message}`; },
      geolocationOptions);
  }
}

const generate = (ev) => {
  const searchString = document.getElementById('zip').value;
  if ("" != searchString) {
    if (false === isNaN(searchString)) {
      requestType = 'WeatherByZipCode';
      zipCode = searchString;
      countryCode = document.getElementById('selectCountry').value;
    }
    else {
      requestType = 'WeatherByCityName';
      cityName = searchString;
    }
  }
  else {
    requestType = 'WeatherByCoordinates';
  }

  userResponse = document.getElementById('feelings').value;

  //fetch weather and store values in node server
  Weather(requestType, apiUnits, cityName, zipCode, countryCode, latitude, longitude)
    .then(w => postData('http://localhost:3000/setWeather', { cityName: w.name, temperature: w.main.temp, date: newDate, content: userResponse }))
    .then(() => getData('http://localhost:3000/getWeather'))
    .then(w => updateUi(w))
    .catch((err) => {
      updateUi({ cityName: '<div class="red">Error: City not found!</div>', temperature: '', tempF: '', date: newDate, content: `${err.code} / ${err.message}`, });
      console.log('Unable to get/fetch -', err);
    });
}


const updateUi = (w) => {
  //console.log(`temperature:${w.temperature} date:${w.date} content:${w.content}`) 
  document.getElementById('date').innerHTML = `Date: ${w.date}`;
  document.getElementById('location').innerHTML = `Location: ${w.cityName}`;
  document.getElementById('temp').innerHTML = `Temperature: ${w.temperature}°C / ${w.tempF}°F`;
  document.getElementById('content').innerHTML = `Users' feeling: ${w.content}`;
};

const showHideCountryList = (s) => {
  if (isNaN(s) || '' == s) {
    document.querySelector('.country').style.display = 'none';
  } else {
    document.querySelector('.country').style.display = 'grid';
  }
}

/* ES6 function to POST data */
const postData = (url, data) => {
  fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header        
  })
    .then((response) => {
      if (response.ok) { response.json(); }
      else { throw Error(response.status); }
    })
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((err) => {
      console.log("Unable to post/fetch -", err);
    });
}

/* Modern/ES6 pattern using .then & .catch replacing the async version*/
const getData = (url) => fetch(url)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw Error(response.status);
    }
  })
  .catch((err) => {
    console.log('Unable to get/fetch -', err);
  });

/* oldschool: Function to GET data */
/* Why does udacity use the async await pattern? */
// const getDataDeprecated = async (url) => {
//     console.log(`opening GET connection: ${url}`);
//     const response = await fetch(url);

//     try {
//         const newData = await response.json();
//         console.log(response.status);
//         return newData;
//     }
//     catch (error) {
//         console.log("error", error);
//         throw Error(response.status);
//     }
// };

const showHideCountryListListener = (ev) => { showHideCountryList(ev.target.value); }



/* Call Function */

setGeoLocation();
formatSelect('custom-select');

document.getElementById('generate').addEventListener('click', generate);
document.getElementById('zip').addEventListener('input', showHideCountryListListener);
showHideCountryList('');

