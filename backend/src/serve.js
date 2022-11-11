require('dotenv/config');
const express = require("express");
const usuarioRoute = require('../src/routes/routes');
const cartaoRoute = require('../src/routes/cartao.routes');
const funcionarioRoute = require('../src/routes/funcionario.routes');
const veiculoRoute = require('../src/routes/veiculo.routes');
const estadoRoute = require('../src/routes/estado.routes');
const cors = require("cors");
const app = express();
const port = 3200;


app.use(express.json());
app.use(cors())
app.use(cartaoRoute)
app.use(usuarioRoute)
app.use(veiculoRoute)
app.use(funcionarioRoute)
app.use(estadoRoute)

app.listen(port ,() => {
    console.log(`servidor iniciado na porta ${port}`) 
   });
