export { Weather }

/**
 * Dummy weather for testing purpose
 * @param { ('CitiesByName'|'WeatherByCityName'|'WeatherByCoordinates'|'WeatherByZipCode') } url 
 * @returns Promise with dummy results for testing
 */
const Weather = (url, apiUnits, cityName, zipCode, countryCode, lat, long) => {
  return new Promise((ok, fail) => {
    switch (url) {
      case 'CitiesByName':
        ok(WeatherData.CitiesByName);
        break;
      case 'WeatherByCityName':
        ok(WeatherData.WeatherByCityName);
        break;
      case 'WeatherByCoordinates':
        ok(WeatherData.WeatherByCoordinates);
        break;
      case 'WeatherByZipCode':
        ok(WeatherData.WeatherByZipCode);
        break;
    }
    fail(`No data found for: ${url}`);
  });

};


const WeatherData = {
  CitiesByName: [
    { "name": "Zurich", "local_names": { "cs": "Curych", "os": "Цюрих", "ml": "സൂറിച്ച്", "sk": "Zürich", "it": "Zurigo", "zh": "蘇黎世", "sv": "Zürich", "sw": "Zürich", "cy": "Zürich", "kn": "ಝ್ಯೂರಿಖ್", "cv": "Цюрих", "yi": "ציריך", "sl": "Zürich", "en": "Zurich", "fi": "Zürich", "nn": "Zürich", "uk": "Цюрих", "gl": "Zúric", "ka": "ციურიხი", "hi": "ज़्यूरिख़", "fa": "زوریخ", "gd": "Zürich", "am": "ዙሪክ", "na": "Zürich", "ta": "சூரிக்", "sh": "Zürich", "mr": "झ्युरिक", "pt": "Zurique", "es": "Zúrich", "io": "Zürich", "wo": "Zurich", "qu": "Zürich", "mk": "Цирих", "de": "Zürich", "th": "ซูริก", "hr": "Zürich", "rm": "Turitg", "yo": "Zürich", "ko": "취리히", "et": "Zürich", "fr": "Zurich", "az": "Sürix", "vo": "Zürich", "sr": "Цирих", "he": "ציריך", "ga": "Zürich", "tr": "Zürih", "nl": "Zürich", "lt": "Ciūrichas", "ru": "Цюрих", "ms": "Zürich", "eu": "Zürich", "be": "Цюрых", "af": "Zürich", "bg": "Цюрих", "my": "ဇူးရစ်ချ်မြို့", "tl": "Zürich", "oc": "Zuric", "ca": "Zuric", "ur": "زیورخ", "sq": "Cyrihu", "lv": "Cīrihe", "jv": "Zürich", "bn": "জুরিখ", "is": "Zürich", "vi": "Zürich", "an": "Zúrich", "lb": "Zürech", "la": "Turicum", "el": "Ζυρίχη", "ug": "سيۇرىخ", "no": "Zürich", "eo": "Zuriko", "ja": "チューリッヒ", "ar": "زيورخ", "pl": "Zurych", "br": "Zürich", "da": "Zürich", "hu": "Zürich", "bs": "Zürich", "id": "Zürich", "ro": "Zürich" }, "lat": 47.3744489, "lon": 8.5410422, "country": "CH", "state": "Zurich" },
    { "name": "Zurich", "lat": 39.234454, "lon": -99.438161, "country": "US", "state": "Kansas" }, { "name": "Zurich", "local_names": { "ru": "Зюрих", "nl": "Zurich", "fy": "Surch" }, "lat": 53.1117662, "lon": 5.3929759, "country": "NL", "state": "Frisia" },
    { "name": "Zurich", "lat": 43.15062, "lon": -77.0433046, "country": "US", "state": "New York" }, { "name": "Sidi Amar", "local_names": { "en": "Sidi Amar", "ms": "Sidi Amar, Tipaza", "pt": "Sidi Amar (Tipasa)", "fr": "Sidi Amar", "it": "Sidi Amar (Tipasa)", "ar": "سيدي عمار", "ro": "Sidi Amar (Tipaza)", "fa": "سیدی عمر" }, "lat": 36.5424676, "lon": 2.3058921, "country": "DZ", "state": "Tipaza" }
  ],

  WeatherByZipCode: {
    "coord": { "lon": 8.5432, "lat": 47.3858 }, "weather": [{ "id": 803, "main": "Clouds", "description": "broken clouds", "icon": "04d" }], "base": "stations", "main": { "temp": 38.44, "feels_like": 38.44, "temp_min": 35.46, "temp_max": 40.95, "pressure": 1007, "humidity": 72 }, "visibility": 10000, "wind": { "speed": 2.3, "deg": 0 }, "clouds": { "all": 75 }, "dt": 1670506177, "sys": { "type": 2, "id": 2073778, "country": "CH", "sunrise": 1670482805, "sunset": 1670513731 }, "timezone": 3600, "id": 0, "name": "Zürich", "cod": 200
  },

  WeatherByCityName: {
    "coord": { "lon": 8.55, "lat": 47.3667 }, "weather": [{ "id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04d" }], "base": "stations", "main": { "temp": 38.48, "feels_like": 36.14, "temp_min": 36.84, "temp_max": 41.07, "pressure": 1018, "humidity": 86 }, "visibility": 10000, "wind": { "speed": 3.44, "deg": 0 }, "clouds": { "all": 100 }, "dt": 1669979165, "sys": { "type": 2, "id": 2019255, "country": "CH", "sunrise": 1669963997, "sunset": 1669995443 }, "timezone": 3600, "id": 2657896, "name": "Zurich", "cod": 200
  },

  WeatherByCoordinates: {
    "coord": { "lon": 8.541, "lat": 47.3744 }, "weather": [{ "id": 803, "main": "Clouds", "description": "broken clouds", "icon": "04d" }], "base": "stations", "main": { "temp": 34.93, "feels_like": 34.93, "temp_min": 31.89, "temp_max": 37.96, "pressure": 1011, "humidity": 86 }, "visibility": 10000, "wind": { "speed": 1.14, "deg": 0 }, "clouds": { "all": 75 }, "dt": 1670491731, "sys": { "type": 2, "id": 2019255, "country": "CH", "sunrise": 1670482803, "sunset": 1670513734 }, "timezone": 3600, "id": 6295546, "name": "Zürich (Kreis 1)", "cod": 200
  },
}

