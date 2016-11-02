var fs = require('fs');
var vhost = require('vhost');
var express = require('express');
var http = require('http');
var https = require('https');

var privateKey = fs.readFileSync('/etc/ssl/private/ssl-cert-snakeoil.key','utf-8');
var certificate = fs.readFileSync('/etc/ssl/certs/ssl-cert-snakeoil.pem','utf-8');
var credentials = {key: privateKey, cert: certificate};
var app = express();

app.use(vhost('192.168.246.129',require('./index1.js').app));
var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials,app);
httpServer.listen(80);
httpsServer.listen(443);
console.log('Server is running in 192.168.246.129:80');
