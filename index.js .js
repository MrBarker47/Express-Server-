// Express 
const express = require("express");
const app = express();
const port = 3000;

const users = require("./data/users");
const routes = require("./data/posts");




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


// template engine


//Middleware
let bodyParser = require("body-parser");

//Error Handling
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({error: err.message});
})

//Listen to the port
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});
