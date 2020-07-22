require('dotenv').config()
const express = require('express');
var request = require('request')
const app = express();

let countries = [];
let historicData = {};
let news = {};

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

var date = new Date()
date.setDate(date.getDate() - 7)

const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date)
const month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(date)
const d = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date)

date = `${year}-${month}-${d}`

app.get('/news', (req, res) => {
    var url = `http://newsapi.org/v2/everything?qInTitle=coronavirus&sortBy=popularity&from=${date}&language=en&apiKey=${process.env.NEWS_API_KEY}`

    request(url, function (error, response, body) {
        if (response.statusCode == 200) {
            news = JSON.parse(body);
            res.send(news);
        }
    })
})

app.listen(port, () => console.log(`Listening at http://localhost:${port}`))