const express = require("express") // Importando Express
const routes = express.Router()

// GET: Buscar uma informação
// POST: Criar uma informação
// PUT: Editar uma informação por completo
// PATCH: Modificar apenas uma parte da informação
// DELETE: Deletar uma informação

routes.get("/", (request, response) => response.send("Hello World")) 
//Request = O que estamos enviando para o backend - Response = O que o backend está devolvendo

module.exports = routes;