//install node: 
//https://nodejs.org/en/download/np

//Run these commands in terminal once:
//npm install cors
//npm install body-parser
//npm install express

// Setup empty JS object to act as endpoint for all routes
projectData = {};

/* Express to run server and routes */
const express = require('express');

/* Start up an instance of app */
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');
const cors = require('cors');

/* Middleware*/
// Configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
app.use(cors());

/* Initialize the main project folder*/
app.use(express.static('website'));


// Setup Server 
const port = 3000;
/* Spin up the server*/
const server = app.listen(port, listening);
function listening() {
  console.log(`running on localhost: ${port}`);
};


// GET routes
// This gets deactivated if index.html exists in main project folder
app.get('/', (request, response) => {
  console.log('GET: /');
  response.send('Weather app waiting for input!')
});


// Send real weather 
app.get('/getWeather', sendData);
function sendData(request, response) {
  response.send(projectData);
};


/**
 * POST route setData
 * Receives three pieces of data from the request body: temperature, date and user response
 */
app.post('/setWeather', setWeather);
function setWeather(request, response) {
  projectData['tempF'] = request.body.temperature;
  projectData['temperature'] = ((request.body.temperature - 32) * 5 / 9).toFixed(1);
  projectData['date'] = request.body.date;
  projectData['content'] = request.body.content;
  projectData['cityName'] = request.body.cityName;
  console.log(`cityName:${projectData.cityName}/tempF:${projectData.tempF}/temperature:${projectData.temperature}/date:${projectData.date}/content:${projectData.content}`);
  response.send(projectData);
};

