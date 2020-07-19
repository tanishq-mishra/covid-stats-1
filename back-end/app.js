require('dotenv').config()
const express = require('express');
var request = require('request')
const app = express();
let countries = [];
let historicData = {};

const port = 5000



app.get('/countries', (req, res) => {
    request('https://www.trackcorona.live/api/countries', function (error, response, body) {
        if (response.statusCode == 200) {
            countries = JSON.parse(body).data;
            res.send(countries);
        }
    })


})

app.get('/key', (req, res) => {
    res.send(process.env.MAPBOX_ACCESS_TOKEN);
})

app.get('/graph', (req, res) => {
    request('https://corona.lmao.ninja/v2/historical/all', function (error, response, body) {
        if (response.statusCode == 200) {
            historicData = JSON.parse(body);
            res.send(historicData);
        }
    })
})

app.listen(port, () => console.log(`Listening at http://localhost:${port}`))