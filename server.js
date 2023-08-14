const express = require('express');
const app = express();
const dotenv = require('dotenv');
const ejs = require('ejs')


// Set EJS as the view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));


// Routes

app.get('/', (req, res) => {
    res.render('home')
})


app.listen('3000', () => {
    console.log('server live');
});

