const dbConnection = require("../database/exportConnection")

module.exports = {
    async getUserByLoginAndPass(req,res,next){
        next.genToken = false
        const login = req.body.frontRequest?req.body.frontRequest.login :""
        const senha = req.body.frontRequest?req.body.frontRequest.senha :""
        var sqlQuery = "SELECT * FROM funcionarios WHERE login = @login AND senha = MD5(@senha) LIMIT 1"
        sqlQuery.replace("@login",login)
        sqlQuery.replace("@senha",senha)
        
        dbConnection.invokeQuery(sqlQuery,(rows)=>{
            rows.length > 0?"":res.token = "" 
            var response = {                
                message:rows.length > 0?"Sucess" : "Nenhum usuario Encontrado",    
                objData:rows.length > 0?rows : 0          
            }
            next.response = response
            rows.length > 0?next.genToken = true:next.genToken = false
            next()            
        })
    },
    async getAllUsers(req,res,next){
        if (next.tokenMessage || next.status ){
            
        }
        var sqlQuery = "SELECT id,login FROM funcionarios"
        dbConnection.invokeQuery(sqlQuery,(rows)=>{
            var response = {                
                message:rows.length > 0 ? 'Usuarios':"Nenhum usuario Encontrado",
                objData:rows.length > 0?rows:0
            }
            next.response = response
            next()
        })
    },
    async updateUserById(req,res){

    },
    async createUser(req,res){

    },
    async deleteUser(req,res){

    }



}
