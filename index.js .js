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

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});
