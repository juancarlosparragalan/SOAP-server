const {
    faker
} = require('@faker-js/faker'),
    express = require('express'),
    router = express.Router();

router.post('/', response);

async function response(req, res, next) {
    //console.log('req', req.body);
    let body = req.body;
    console.log(JSON.stringify(body));
    const nameVar = faker.name.firstName(),
        typeVar = 'C',
        numberVar = 123456,
        emailVar = faker.internet.email(),
        cityVar = faker.address.cityName();
    const xml = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:con="http://www.banco.com/esb/services/consultaUsuario/"><soapenv:Header/><soapenv:Body><con:consultaUsuarioRs><con:responseHeader><con:status><con:statusCode>200</con:statusCode><con:statusDesc>success</con:statusDesc></con:status></con:responseHeader><con:usuarioRs><con:nombre>nameVar</con:nombre><con:tipodeDocumento>typeVar</con:tipodeDocumento><con:numeroDocumento>numberVar</con:numeroDocumento><con:email>emailVar</con:email><con:ciudad>cityVar</con:ciudad></con:usuarioRs></con:consultaUsuarioRs></soapenv:Body></soapenv:Envelope>'
    const xmlResp = xml.replace('nameVar', nameVar)
        .replace('typeVar', typeVar)
        .replace('numberVar', numberVar)
        .replace('emailVar', emailVar)
        .replace('cityVar', cityVar)
    res.status(200).send(xmlResp);
}

module.exports = response;