const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const helmet = require("helmet");
const getRoutes = express.Router();

app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 3100;


getRoutes.get("/",(req,res)=>{
    res.status(200).send([{ sucess: true, milton:"alo" }])
    }
);
getRoutes.get("/bomdia",(req,res)=>{
    res.status(200).send([{ sucess: false, milton:"Bom dia e minha Pica" }])
    }
);

app.use(getRoutes)

app.listen(PORT, () => {
    console.log(`Server rodando na porta  ${PORT}`);
  });