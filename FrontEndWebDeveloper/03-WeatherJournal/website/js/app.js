import { Weather } from "./fakeWeather.js";
// import { Weather } from "./realWeather.js";
import { formatSelect } from "./utils.js"; 

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

let requestType = 'WeatherByZipCode';
let apiUnits = 'metric';
let cityName = 'Zurich';
let zipCode = '8006';
let countryCode = 'CH';
let userResponse = 'no input';


const generate = (ev) => {
  const searchString = document.getElementById('zip').value;
  if (false === isNaN(searchString)) {
    requestType = 'WeatherByZipCode';
    zipCode = searchString;
    countryCode = document.getElementById('selectCountry').value;
  }
else if ("" != searchString) {
  requestType = 'weatherByCityName';
  cityName = searchString;
}
else {
  requestType = 'WeatherByCoordinates';
  //get myLocation somehow...
}

userResponse = document.getElementById('feelings').value;

//fetch weather and store values in node server
      Weather(requestType, apiUnits, cityName, zipCode, countryCode)
        .then(w => postData('http://localhost:3000/setWeather', { temperature: w.main.temp, date: newDate, content: userResponse }))
        .catch((err) => {
          console.log('Unable to get/fetch -', err);
        });
      
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
/* Oldschool to POST data */
/* Why udacity wants me to use the async await pattern? */
// const postDataDeprecated = async (url = '', data = {}) => {
//   console.log(data);
//   const response = await fetch(url, {
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data), // body data type must match "Content-Type" header        
//   });

//   try {
//     const newData = await response.json();
//     //console.log(`client: newData: ${newData.name}`);
//     console.log(newData);
//     return newData
//   } catch (error) {
//     console.log("error", error);
//     // appropriately handle the error
//   }
// }

/* Modern/ES6 pattern using .then & .catch */
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





/* Call Function */
// const foo = getData('http://localhost:3000/all');
// setTimeout(() => console.log(foo), 2000);

//postData('http://localhost:3000/InputValues', { temperature: '80', date: 2022-12-10 });
//postData('./addAnimal', { name: 'dog' });

document.getElementById('generate').addEventListener('click', generate);

formatSelect('custom-select');
