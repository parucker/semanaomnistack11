const express = require("express");
const cors = require('cors');
const routes = require('./routes');


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 *  Para startar o banck-end use npm start 
 *  dentro do diretorio
 * 
 */
/**
 *  GET: Busca informacao do back-end
 *  POST: Cria informacao no back-end
 *  PUT : altera informacao no back-end
 *  DELETE: Deletar informacao no back-end
 */

 /**
  * Querry Params: parametros nomeados enviados na rota após "?",
  * e servem pra filtros, paginação
  * Route Params: utilizados pra identificar recursos 
  * Request Body: corpo da requisicao, utilizado para criar 
  * ou alterar recursos (nome, evento, ...)
  * 
  */

/**
 *  Querry Builder: table('users').select('*').where()
 *  KNEX.JS
 */
app.listen(3333);


