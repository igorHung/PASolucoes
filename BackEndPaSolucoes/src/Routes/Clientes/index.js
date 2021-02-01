const express = require("express");
const Routes = express.Router()
const clientesRoutes = express.Router();
const ClientesControler = require("../../Controlers/clientes")

clientesRoutes.get("/clientes/clientesAll",  
    ClientesControler.getAllClientes 
),
clientesRoutes.post("/clientes/cliente",
    ClientesControler.getClienteById
)
clientesRoutes.post("/clientes/updatecliente",
    ClientesControler.updateCliente
)
clientesRoutes.post("/clientes/createcliente",
    ClientesControler.createCliente
)
clientesRoutes.post("/clientes/deletecliente",
    ClientesControler.deleteCliente
)

module.exports = clientesRoutes ;
