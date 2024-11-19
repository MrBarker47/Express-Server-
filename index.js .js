// Express 
const express = require("express");
const app = express();
const port = 3000;





//creating a Get,Post,Patch/Put and Delete routes
app.get('/', (req, res) => {
    res.send('Hello, Jamaal');
})

app.post('/', (req, res) => {
    res.send()
})

app.put('/', (req, res) => {
    res.send()
})

app.delete('/', (req, res) => {
    res.send()
})


// template engine
function renderHello() {
    let template = document.getElementById('template').innerHTML;
    let rendered = Mustache.render(template, { name: 'Jamaal' });
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
