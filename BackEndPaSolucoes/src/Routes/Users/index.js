const express = require("express");
const Routes = express.Router()
const userRoutes = express.Router();
const UserControler = require("../../Controlers/users")

userRoutes.get("/users/usersAll",  
    UserControler.getAllUsers  
),
userRoutes.post("/users/user",
    UserControler.getUserByLoginAndPass
)
userRoutes.post("/users/updateuser",
    UserControler.updateUserById
)
userRoutes.post("/users/createuser",
    UserControler.createUser
)
userRoutes.post("/users/deleteuser",
    UserControler.deleteUser
)

module.exports = userRoutes ;
