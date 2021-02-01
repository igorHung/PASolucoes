const dbConnection = require("../database/exportConnection")

module.exports = {
    async getUserByLoginAndPass(req,res){
        
        const login = req.body.frontRequest?req.body.frontRequest.login :""
        const senha = req.body.frontRequest?req.body.frontRequest.senha :""
        var sqlQuery = "SELECT * FROM funcionarios WHERE login = @login AND senha = MD5(@senha) LIMIT 1"
        sqlQuery.replace("@login",login)
        sqlQuery.replace("@senha",senha)

        dbConnection.invokeQuery(sqlQuery,(rows)=>{
            var response = {                
                errorMessage:rows.length > 0?rows:"Nenhum usuario Encontrado"
            }
            res.status(200).send(response)
        })
    },
    async getAllUsers(req,res){
        var sqlQuery = "SELECT * FROM funcionarios"
        dbConnection.invokeQuery(sqlQuery,(rows)=>{
            var response = {                
                errorMessage:rows.length > 0 ? "":"Nenhum usuario Encontrado",
                dados:rows.length > 0?rows:""
            }
            res.status(200).send(response)
        })
    },
    async updateUserById(req,res){

    },
    async createUser(req,res){

    },
    async deleteUser(req,res){

    }



}
