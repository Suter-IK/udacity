export { Weather }


/* Global Variables */
const apiKey = '523d6ca10d95299119e01ec8cf412787';

//Zurich coordinates
//let latitude = '47.3744489';
//let longitude = '8.5410422';

//zip of Zurich
//let zipCode = '8006';
//let countryCode = 'CH';

/**
 * Fetch weather from openweathermap API
 * @param { ('CitiesByName'|'WeatherByCityName'|'WeatherByCoordinates'|'WeatherByZipCode') } url 
 * @param { ('imperial'|'metric') } apiUnits
 * @returns Promise from API
 */
const Weather = (url, apiUnits, cityName, zipCode, countryCode) => {
    return new Promise((ok, fail) => {
        switch (url) {
            case 'CitiesByName':
                ok(getWeather(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${apiKey}`));
                break;
            case 'WeatherByCityName':
                ok(getWeather(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${apiUnits}`));
                break;
            case 'WeatherByCoordinates':
                ok(getWeather(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${apiUnits}`));
                break;
            case 'WeatherByZipCode':
                ok(getWeather(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},${countryCode}&appid=${apiKey}&units=${apiUnits}`));
                break;
        }
        fail(`No data found for: ${url}`);
    });

};


const getWeather = (url) => fetch(url)
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
