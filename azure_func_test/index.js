const axios = require('axios');

module.exports = async function (context, req) {
    try {
        context.log('JavaScript HTTP trigger function processed a request.');

        let hc = await axios.get('http://lais-core-app.lasa.com.br')
        context.res.status = 200;        
        context.res.body = hc.data;
    }
    catch(err){
        context.res.status = 400;
        context.res.data = 'Falha no request'
    }
    
};