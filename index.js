const express = require("express"),
    cors = require('cors'),
    xmlparser = require('express-xml-bodyparser'),
    port = process.env.PORT || 8080;

const app = express(),
    server = require('http').Server(app),
    responser = require('./responser/responser');

app.use(xmlparser());
app.use(cors());

app.use('/api/v1/semillero', responser)

server.listen(port, () => {
    console.log("Server Starts at port " + port);
});