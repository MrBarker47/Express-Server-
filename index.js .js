// Express 
const express = require("express");
const app = express();
const port = 3000;

const users = require("./routes/users");
const routes = require("./routes/posts");




//creating a Get,Post,Patch/Put and Delete routes
app.get('/', (req, res) => {
    res.send(`Hello, Jamaal, well come to express!`);
})

app.post('/', (req, res) => {
    res.send("Here's a Post request");
})

app.put('/user', (req, res) => {
    res.send('Users asked for a Put request')
})

app.delete('/user', (req, res) => {
    res.send("Deleted Info from the Users")
})



// template engine
function renderHello() {
    var template = document.getElementById('template').innerHTML;
    var rendered = Mustache.render(template, { name: 'Luke' });
    document.getElementById('target').innerHTML = rendered;
  }


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
