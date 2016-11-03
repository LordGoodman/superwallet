var ajaxReq = function(){}
ajaxReq.http = $http;
ajaxReq.postSerializer = $httpParamSerializerJQlike;
ajaxReq.SERVERURL = "http://192.168.246.129/api.wow";
ajaxReq.pendingPosts = [];
akaxReq.confg = {
	header:{
		'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
	}
};

ajaxReq.getBlockCount = function(callback){
	this.post({
	"blockCount": ''
	}, callback);
}

ajaxReq.post = function(data, callback){
	this.pendingPosts.push({
		data : data,
		callback : callback,
	});
	if (this.pendingPosts.length == 1) this.queuePost();
}

ajaxReq.queuePost = function(){
	var data = this.pendingPosts[0].data;
	var callback = this.pendingPosts[0].callback;
	this.http.post(this.SERVERURL, this.postSerializer(data), this.config).then(function(data) {
		callback(data);
		ajaxReq.pendingPosts.splice(0,1);
		if (ajaxReq.pendingPost.length >0 ) ajaxReq.queuePost();
	});
}

module.exports = ajaxReq;
