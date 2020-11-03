import axios from 'axios'

let subapi = {

};
subapi.ajax = axios.create({
    baseURL: 'http://140.143.128.100:3000/',
	timeout: 15000,
});
// 请求域名 

subapi.xx = function(params) {
	return new Promise(function(resolve, reject) {
		if (isTest) {
			var data = {
			
			}
			resolve({ err: 0, data: data })
		} else {
			return subapi.getAjax('post', 'xx', params).then(resolve, reject)
		}
	})
}

subapi.getAjax = function(method,url,params,responseTypes){
	return new Promise(function(resolve,reject){
		let subUrl = url;
		if(method == "get" && params){
			var arr = [];
			for(let s in params){
				arr.push([s,params[s]].join("="))
			}
			subUrl += "?"+arr.join("&");
		}
		subapi.ajax({
			method: method,
			url: subUrl,
			data: params,
			responseType:responseTypes || ""
		}).then(function(res){ //console.log(res)
			resolve(res.data);
		},function(err){ 
			if(err.toString().indexOf(401)>-1){
				resolve({err:0})
			}else{
				reject(err)
			}
		});
	});
}



export default subapi;
