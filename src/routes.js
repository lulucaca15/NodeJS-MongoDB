const express = require("express") // Importando Express
const routes = express.Router()

const UserController = require("./controller/UserController")
const UserMiddleware = require("./middlewares/UserMiddleware")

// GET: Buscar uma informação
// POST: Criar uma informação
// PUT: Editar uma informação por completo
// PATCH: Modificar apenas uma parte da informação
// DELETE: Deletar uma informação

//Request = O que estamos enviando para o backend - Response = O que o backend está devolvendo
// routes.get("/", (request, response) => response.send("Hello World")) 

routes.get("/users", UserController.index)
routes.post("/users", UserController.store)
routes.put("/users/:id", UserMiddleware.validateId, UserController.update)
routes.delete("/users/:id", UserMiddleware.validateId, UserController.delete)

module.exports = routes;