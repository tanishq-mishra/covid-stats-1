const express = require('express');
var request = require('request')
const app = express();
let countries = [];

const port = 5000

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/countries', (req, res) => {
    request('https://www.trackcorona.live/api/countries', function (error, response, body) {
        if (response.statusCode == 200) {
            countries = JSON.parse(body).data;
            res.send(countries);
        }
    })


})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))