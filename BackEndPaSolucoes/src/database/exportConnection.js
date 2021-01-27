var path = require('path');
const DevDB = require("./connectionDev")
const ProdDB = require("./connectionProd")

if(process.env.NODE_ENV == "dev"){
    module.exports = DevDB
}else{
    module.exports = ProdDB
}

