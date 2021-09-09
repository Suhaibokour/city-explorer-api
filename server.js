'use strict';
require('dotenv').config();
let express = require('express');
let cors = require('cors');
// let weatherData = require('./data/weather.json');
// const axios = require('axios');
let PORT = process.env.PORT;
let server = express();
server.use(cors());

const getMovie =require('./movies')
const getWeather =require('./weather')

// http://localhost:3020/daily?city=irbid&key=50e57a92c64a49938e121a197570727a
server.get('/daily', getWeather);

server.get('/movies',getMovie);

server.get('*', (req, res) => {
    res.status(404).send('Sorry, page not found');
})

server.listen(PORT, () => {
    console.log(`this is my ${PORT}`);
})










