# Weather-Journal App Project

## Overview
This project is an asynchronous web app that uses Web API and user data to dynamically update the UI. 

## Project 3 - Weather Journal App (Front End Developer Udacity Nanodegree)
### Project Objective
This project demonstrates the use of Web APIs and asynchronous code.
It uses the OpenWeatherMap API to fetch weather based data for the location of the user and updates the UI dynamically. 
### Setup
1. To set up the project environment, you need Node (express, cors and body-parser).
2. Start the server within the terminal: command `node server.js`.

### Development Strategy
* Project environment setup with Node and packages installed and included in server.js file.
* POST and GET routes to retrieve server data.
* Acquire access to OpenWeatherMap API and fetch data with API
* Create a fake service to reduce the amount of real requests.
* Initialize page with geolocation information at startup.
* Fetch data from Weather service and POST specific data to the global container within server.js (localhost).
* Update the UI dynamically.
* Catch errors in console and UI.

### Final Output
* Application with geolocation functionality, fetching the current weather of the user's location.
* UI for zip or location name input.
* Current temperature, date and location.

### Rescources
 * https://www.w3schools.com/howto/howto_custom_select.asp
 * https://openweathermap.org/api

