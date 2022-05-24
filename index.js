const express = require("express");
const app = express();
const port = 3000;

app.set("view engine" , "ejs");

app.use(express.static(__dirname + '/public/'));

app.get("/", (request , response) => {
    let titulo = "pagina inicial"
    response.render("pages/home" , {titulo });
});

app.get("/termos", (request , response) => {
    let titulo = "termos";
    response.render("pages/termos" , {titulo});
});

app.get("/time", (request , response) => {
    let titulo = "time";
    response.render("pages/time" , {titulo});
});



app.listen(port ,() => {
 console.log(`servidor iniciado na porta ${port}`) 
});