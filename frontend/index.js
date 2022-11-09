require('dotenv/config');
const express = require("express");
const app = express();
const port = 3000;

app.set("view engine" , "ejs");
app.set('views' , './views')


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

app.get("/cadastro", (request , response) => {
    let titulo = "cadastro";
    response.render("pages/cadastro" , {titulo});
});

app.get("/carros", (request , response) => {
    let titulo = "carros";
    response.render("pages/carros" , {titulo});
});

app.get("/login" , (request , response)=> {
    let titulo = "login";
    response.render("pages/login" , {titulo});
})

app.get("/plano" , (request , response)=> {
    let titulo = "planos";
    response.render("pages/plano" , {titulo});
})

app.get("/pagamento", (request , response)=> {
    let titulo = "pagamento";
    response.render("pages/pagamento" , {titulo});
})
app.get("/feedback", (request , response) => {
    let titulo = "feedback";
    response.render("pages/feedback" , {titulo});
});

app.get("/agendamento", (request , response) => {
    let titulo = "agendamento";
    response.render("pages/agendamento" , {titulo});
});

app.get("/cartao", (request , response) => {
    let titulo = "cartao";
    response.render("pages/cartao" , {titulo});
});

app.get("/usuario", (request , response) => {
    let titulo = "usuario";
    response.render("pages/usuario" , {titulo});
});

app.use((req,res,next) => {
    res.status(404).render("pages/not-found" )
})


app.listen(port ,() => {
 console.log(`servidor iniciado na porta ${port}`) 
});


