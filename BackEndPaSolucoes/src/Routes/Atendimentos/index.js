const express = require("express");
const Routes = express.Router()
const AtendimentoRoutes = express.Router();
const AtendimentoControler = require("../../Controlers/atendimentos")

AtendimentoRoutes.get("/atendimento/atendimentoAll",  
    AtendimentoControler.getAllAtendimentos  
),
AtendimentoRoutes.post("/atendimento/atendimento",
    AtendimentoControler.getAtendimentoById
)
AtendimentoRoutes.post("/atendimento/updateatendimento",
    AtendimentoControler.updateAtendimento
)
AtendimentoRoutes.post("/atendimento/createatendimento",
    AtendimentoControler.createAtendimento
)
AtendimentoRoutes.post("/atendimento/deleteatendimento",
    AtendimentoControler.deleteAtendimento
)

module.exports = AtendimentoRoutes ;
