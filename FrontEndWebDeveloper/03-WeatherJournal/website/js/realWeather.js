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
const Weather = (url, apiUnits, cityName, zipCode, countryCode, latitude, longitude) => {
    return new Promise((ok, fail) => {
        let url2Fetch = '';
        switch (url) {
            case 'CitiesByName':
                url2Fetch = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${apiKey}`;
                break;
            case 'WeatherByCityName':
                url2Fetch = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${apiUnits}`;
                break;
            case 'WeatherByCoordinates':
                url2Fetch = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${apiUnits}`;
                break;
            case 'WeatherByZipCode':
                url2Fetch = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},${countryCode}&appid=${apiKey}&units=${apiUnits}`;
                break;
        }
        getWeather(url2Fetch).then(response => ok(response)).catch(err => fail(`No data found for: ${url} / ${url2Fetch}`));
    });
}


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
        throw Error(err);
    });
