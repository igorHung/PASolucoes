const express = require("express");
const Routes = express.Router()
const dbConnection = require("../../database/exportConnection")
const userRoutes = express.Router();

userRoutes.get("/time",(req,res)=>{    
    var querytest = "select @@timezone"
        dbConnection.invokeQuery(querytest,function(rows){
            res.status(200).send([rows])
        })
    }
),
userRoutes.get("/banco",(req,res)=>{    
    var querytest = "select * from funcionarios"
        dbConnection.invokeQuery(querytest,function(rows){
            res.status(200).send([rows])
        })
    }
),

userRoutes.get("/",(req,res)=>{

    res.status(200).send([{ sucess: true, milton:"alo" }])
    }
)
userRoutes.get("/bomdia",(req,res)=>{
    res.status(200).send([{ sucess: false, milton:"Bom dia e minha Pica" }])
    }
)
module.exports = userRoutes ;
