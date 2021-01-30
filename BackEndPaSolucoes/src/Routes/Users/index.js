const express = require("express");
const Routes = express.Router()
const userRoutes = express.Router();
const UserControler = require("../../controlers/users")

userRoutes.get("/users/banco",  
    UserControler.getAllUsers  
),
userRoutes.get("/users/user",
    UserControler.getUserByLoginAndPass
)

userRoutes.get("/users/",(req,res)=>{

    res.status(200).send([{ sucess: true, milton:"alo" }])
    }
)
userRoutes.get("/users/bomdia",(req,res)=>{
    res.status(200).send([{ sucess: false, milton:"Bom dia e minha Pica" }])
    }
)
module.exports = userRoutes ;
