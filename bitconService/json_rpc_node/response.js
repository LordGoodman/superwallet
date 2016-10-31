var bitcoin = require('bitcoind-rpc')
var BN = require('bignumber.js')
var wait = require('wait.for')
var Sync = require('sync')

var rpc = new bitcoin({
	user: 'user',
	pass: 'pass',
	host: 'localhost',
	port: '18332',
	protocol : 'http'
});

/*
response.getResponseSync = function(method,data){
		var resp = wait.
		for(method,data);
		if (resp.error) throw resp.data;
		return resp.data;
	}

response.getDefaultResponse = function() {
		return {
			"error" : false,
			"msg"   : "",
			"data"  : ""
			};
		}

response.runInTryCatch = function(func) {
	var data = this.getDefaultResponse();
	try {
		func(data);
		}catch(e){
			data.error = true;
			data.msg = e.toString();
		}
	console.log(data);
	return JSON.stringify(data);
}

*/
module.exports = rpc
