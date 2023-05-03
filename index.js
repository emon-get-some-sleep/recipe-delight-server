const express = require('express');

const app = express();
var cors = require('cors')
app.use(cors());
const chef = require('./chef.json');
const foodGallary  = require('./foodGallary.json');
app.get('/', (req, res) => {
    res.send('Recepi Delight is online');
})

app.get('/chefs', (req, res) => {
    res.send(chef);
})

app.get('/foodGallary', (req, res) => {
    res.send(foodGallary);
})



app.listen(5000, () => {
    console.log('server is running on port 5000')
})