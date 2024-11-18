// Express 
const express = require("express");
const app = express();
const port = 3000;




// template engine
function renderHello() {
    let template = document.getElementById('template').innerHTML;
    let rendered = Mustache.render(template, { name: 'Luke' });
    document.getElementById('target').innerHTML = rendered;
  }


//Middleware
let cookiePaser = require("cookie-paser");
app.use(cookiePaser());


//Error Handling
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({error: err.message});
})

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});
