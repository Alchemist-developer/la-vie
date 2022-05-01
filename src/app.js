const express = require('express'); // importando express
const routes = require('./routes'); // ativando recurso de rotas (./router/index.js), sendo que o index.js e chamado automativamente

const db = require('./database');

const app = express();

db.hasConection();

app.use(express.json()) // importante usar a funcao em json antes da routes(rotas) -- quero utilizar a estrutura de json

app.use(routes); // use as rotas externas criadas

app.listen(3000, ()=> console.log('Servidor rodando na porta 3000')); // cria o servidor na porta 3000