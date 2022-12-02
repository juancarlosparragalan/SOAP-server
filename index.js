const express = require("express"),
    cors = require('cors'),
     xmlparser = require('express-xml-bodyparser');

const app = express(),
    server = require('http').Server(app),
    responser = require('./responser/responser');

app.use(xmlparser());
app.use(cors());

app.use('/api/v1/semillero', responser)


server.listen(8080, () => {
    console.log("Server Starts at port " + 8080);
});