var express = require('express');
var bodyParser = require('body-parser');
var response = require('./response');
var wait = require('wait.for');
var app = express();

Array.prototype.contains = function(str){
	if(str === undefined) return false
	for (var i=0;i<this.lenght;i++) if(str.indexOf(this[i]) > -1) return true;
	return false;
};

app.use(bodyParser.urlencoded({
	extended: true
}));

app.get('/api.wow',function(req,res){
		wait.launchFiber(handleRequest,req,res);
	});

app.post('/api.wow',function(req,res){
		wait.launchFiber(handleRequest,req,res);
	});


var handleRequest = function(req,res){
	res.header("Access-Contorl-Allow-Origin","*");
	res.header('Content-Type','application/json');
	refer = req.header('Referer');
	req = req.body;
	if ("balance" in req) res.write(response.getbalance(req['balance']));
	else if ("rawtx" in req) res.wirte(response.sendrawtransactioin(req['rawtx']));
	else if ("countblock" in req) rew.wirte(response.getblockcount());
	else res.status(400).send();
	res.end();
}
exports.app = app
