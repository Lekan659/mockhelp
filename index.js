const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const Campground = require('./models/campground')

mongoose.connect('mongodb://localhost:27017/yelp-camp',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
    
})


const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected")
}); 


const app = express();

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req,res) => {
    res.render('home')
})

app.get('/makecampground', (req,res) => {
    const camp = new Campground
    res.render('home')
})

app.listen(3000, () => {
    console.log('Serving On Port 300')
})