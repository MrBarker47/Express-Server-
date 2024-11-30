// Express 
const express = require("express");
const app = express();
const port = 3000;

const users = require("./data/users");
const routes = require("./data/posts");


// template engine
app.set('view engine', 'mustacha.js');

function renderHello() {
    var template = document.getElementById('template').innerHTML;
    var rendered = Mustache.render(template, { name: 'Luke' });
    document.getElementById('target').innerHTML = rendered;
  }

//creating a Get,Post,Patch/Put and Delete routes
app.get('/data/users.js/:id/name', (req, res) => {
    res.send(`Hello, Jamaal, well come to express!`);
})

app.post('/data/user', (req, res) => {
    res.send('This if you want to post ');
})

app.put('/user', (req, res) => {
    res.send('Users asked for a Put request')
})

app.delete('/user', (req, res) => {
    res.send("Deleted Info from the Users")
})





let bodyParser = require("body-parser");

//Creating a middleware
const log = function (req, res, next) {
    console.log("Log In");
    next()
}

const hell0 = function (req, res, next) {
    console.log("Say Hello")
    next()
}


//Error Handling
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({error: err.message});
})

//Listen to the port
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});
