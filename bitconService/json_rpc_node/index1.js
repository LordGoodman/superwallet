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
	 handleRequest(req,res);
});

app.post('/api.wow',function(req,res){
	 handleRequest(req,res);
});

var handleRequest = function(req,res){
	
	res.header('Access-Control-Allow-Origin','*');
	res.header('Content-Type','application/json');
	res.header('Access-Control-Allow-Methods','POST, GET, OPTIONS, PUT, DELETE');	
	refer = req.header('Referer');
	//req = {"balance":"moW1ona3vXmhbHA1v5BZqnQ5HGSc3iQgWr"};
	req = req.body;
	console.log(req);
	if("balance" in req ) response.getreceivedbyaddress(req['balance'],function(err,result){  //handle balance not detial
		if(err) res.write(JSON.stringify(err));
		else res.write(JSON.stringify(result));
		res.end()
		});

	else if("utxo" in req) response.listunspent(0,99999999,new Array(req['utxo']),function(err,result){
		if (err) res.write(JSON.stringify(err));
		else res.write(JSON.stringify(result));
		res.end();
		});
	
	else if("rawtx" in req) reponse.sendrawtransaction(req['rawtx'],function(err,result){
		if (err) res.write(JSON.stringify(err));
		else res.write(JSON.stringify(result));
		res.end();
		});
	
	else if("countblock" in req) response.getblockcount(function(err,result){
		if(err) res.write(JSON.stringify(err));
		else res.write(JSON.stringify(result));
		res.end();
		});
	else res.status(400).send();
}

exports.app = app
