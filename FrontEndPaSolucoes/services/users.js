const baseUrl = require("./index")
const usersApi = baseUrl+"/users/"
const axios = require('axios');

module.exports = {
    async getAll (){   
        return await axios({
            method: 'get',
            url: usersApi+"banco",
            data: {
            firstName: 'Fred'
            }
        }) 
    }
    
}


