/* Empty JS object to act as endpoint for all routes */
projectData = {};

/* Express to run server and routes */
const express = require('express');

/* Start up an instance of app */
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

/* Initialize the main project folder*/
app.use(express.static('website'));

const port = 3000;
/* Spin up the server*/
const server = app.listen(port, listening);
 function listening(){
    // console.log(server);
    console.log(`running on localhost: ${port}`);
  };

// GET route 
//die kann ganz einfach mit dem Browser getestet werden, falls response.send vorhanden.
app.get('/', (req, res) => res.send('hallo welt!'));
app.get('/all', sendData);

function sendData (request, response) {
  response.send(projectData);
};

// POST route
//testen mit terminal: node app.js oder mit postman
app.post('/add', callBack);

function callBack(request,response){
  response.send('POST received');
}

// POST an animal to the list
const data = [];

app.post('/addAnimal', addAnimal);
function addAnimal (request,response){
    data.push(request.body);  
    console.log([data[0].name]);
    console.log(data); //[ { name: 'cat' }, { name: 'dog' }, { name: 'fish' } ]
    response.send(data);
};

