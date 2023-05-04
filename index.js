const express = require('express');

const app = express();
var cors = require('cors')
app.use(cors());

const port = process.env.PORT || 5000;

const chef = require('./chef.json');
const foodGallary  = require('./foodGallary.json');
const blogs  = require('./blog.json');


app.get('/', (req, res) => {
    res.send('Recepi Delight is online');
})

app.get('/chefs', (req, res) => {
    res.send(chef);
})

app.get('/foodGallary', (req, res) => {
    res.send(foodGallary);
})

app.get('/blogs', (req, res) => {
    res.send(blogs);
})

app.get('/chefs/:id', (req, res) => {
    const id = req.params.id;
    const data = chef.chefs.find(c => c.id == id);
    res.send(data);
})



app.listen(port, () => {
    console.log(`Recipe delight is running on port : ${port}`);
})