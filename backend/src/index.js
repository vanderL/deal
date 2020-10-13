const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

//app.use(cors({
//    origin: "http:meuapp.com"
//}))
app.use(cors())
app.use(express.json())
app.use(routes)
/*
* Tipos de parâmetros:
*
* Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação) //const params = request.query;
* Route Params: Parâmetros utilizados para identificar recursos //const params = request.params;
* Request Body: Corpo da requisição, utilizado para criar ou alterar recursos //const body = request.body;
*/

app.listen(3333)