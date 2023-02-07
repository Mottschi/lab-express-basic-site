// imports
const express = require('express');
const hbs = require('hbs');


// init
const PORT = 3000;
const app = express();


// setup
app.use(express.static(`${__dirname}/public`));
app.set('view engine', 'hbs');
hbs.registerPartials(`${__dirname}/views/partials`);

// routes
app.get('/', (req, res)=>{
    res.render('index');
});

app.get('/about', (req, res)=>{
    res.render('about');
});

app.get('/works', (req, res)=>{
    res.render('works');
});

app.get('/gallery', (req, res)=>{
    res.render('gallery', {css: ['gallery']});
});

app.get('*', (req, res)=>{
    res.render('error', {route: req.originalUrl});
});

// start server
app.listen(PORT, ()=> {
    console.log(`Server started. Listening at http://localhost:${PORT}`);
})