'use strict';
var rpc = require('node-json-rpc');
var Sync = require('sync');
var BN = require('bignumber.js');
var wait = require('wait.for');
var Response = function() {}
Response.client = new rpc.Client({
	port: 8545,
	host: '192.168.246.129',
	path: '/',
	strict: true
});
Response.clientClassic = new rpc.Client({
	port: 8545,
	host: '172.22.28.123',//change later
	path: '/',
	strict: true
});
Response.getResponse = function(method, data, isClassic, callback) {
	var resp;
	var client = isClassic ? "clientClassic" : "client";
	Response[client].call({
		"jsonrpc": "2.0",
		"method": method,
		"params": data,
		"id": Math.floor(Math.random() * 100000)
	}, function(err, res) {
		if (err) callback(null, {
			error: true,
			data: err
		})
		else if ("error" in res) callback(null, {
			error: true,
			data: res.error.message
		});
		else callback(null, {
			error: false,
			data: res.result
		});
	});
}
Response.getResponseSync = function(method, data, isClassic) {
	var resp = wait.
	for (Response.getResponse, method, data, isClassic);
	if (resp.error) throw resp.data;
	return resp.data;
}
Response.getBalance = function(addr, isClassic) {
	return this.runInTryCatch(function(data) {
		addr = Response.formatAddress(addr);
		data.result = {
			address: addr,
			balance: new BN(Response.getResponseSync("eth_getBalance", [addr, "pending"], isClassic))
		};
	});
}
Response.getCurrentBlock = function(isClassic) {
	return this.runInTryCatch(function(data) {
		data.result = new BN(Response.getResponseSync("eth_blockNumber", [], isClassic));
	});
}
Response.getTransactionData = function(addr, isClassic) {
	var parent = this;
	return this.runInTryCatch(function(data) {
		addr = parent.formatAddress(addr);
		data.result = {
			address: addr,
			balance: new BN(Response.getResponseSync("eth_getBalance", [addr, "pending"], isClassic)),
			nonce: Response.getResponseSync("eth_getTransactionCount", [addr, "pending"], isClassic),
			gasprice: Response.getResponseSync("eth_gasPrice", [], isClassic)
		};
	});
}
Response.sendRawTransaction = function(rawTx, isClassic) {
	var parent = this;
	return this.runInTryCatch(function(data) {
		data.result = Response.getResponseSync("eth_sendRawTransaction", [rawTx], isClassic);
	});
}
Response.getEthCall = function(txObj, isClassic) {
	var parent = this;
	return this.runInTryCatch(function(data) {
		data.result = Response.getResponseSync("eth_call", [txObj, "pending"], isClassic);
	});
}
Response.getEstimatedGas = function(txObj, isClassic) {
	var parent = this;
	return this.runInTryCatch(function(data) {
		data.result = Response.getResponseSync("eth_estimateGas", [txObj], isClassic);
	});
}
Response.getErrorResponse = function(e) {
    var data = this.getDefaultResponse();
    data.error = e;
    return JSON.stringify(data);
}
Response.getDefaultResponse = function() {
	return {
		"result": "",
		"error" : "null"
	};
}
Response.runInTryCatch = function(func) {
	var data = this.getDefaultResponse();
	try {
		func(data);
	} catch (e) {
		data.error = e.toString();
		//result.msg = e.toString();
	}
	return JSON.stringify(data);
}
Response.formatAddress = function(addr) {
	if (addr.substring(0, 2) == "0x") return addr;
	return "0x" + addr;
}
module.exports = Response;
