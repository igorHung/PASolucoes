require('dotenv').config()
const jwt = require('jsonwebtoken');

module.exports = {
    async verifyJWT(req, res, next){    
        const token = req.headers['x-access-token'];
        if (!token){
            next.status = 400
            next.tokenMessage = 'No token provided.'
        }         
        jwt.verify(token, process.env.SECRET, function(err, decoded) {
          if (err){
            next.status = 500
            next.tokenMessage = "Failed to authenticate token."
          }  
        });
        next();
    },
    
    async createJWT(req,res,next){
        if(next.genToken){
            let randomString = Math.random().toString(36).substring(7);        
            const token = jwt.sign({ randomString }, process.env.SECRET, {
                expiresIn: 3600 // expires in 1 hour
            });        
            next.token = token
        }
        next()
    }
}


