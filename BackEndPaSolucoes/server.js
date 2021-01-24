const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const server = express();
const helmet = require("helmet");
const getRoutes = express.Router();

server.use(bodyParser.json());
server.use(cors());
server.use(helmet());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

const PORT =  3102;

getRoutes.get("/",(req,res)=>{
    res.status(200).send([{ sucess: true, milton:"alo" }])
    }
);
getRoutes.get("/bomdia",(req,res)=>{
    res.status(200).send([{ sucess: false, milton:"Bom dia e minha Pica" }])
    }
);

server.use(getRoutes)

server.listen(PORT, () => {
    console.log(`Server rodando na porta  ${PORT}`);
});