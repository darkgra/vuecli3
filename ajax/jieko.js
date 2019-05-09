var express = require('express'); //引入express模块
var app = express();

// app.all('*', function (req, res, next) { //设置跨域访问
// 	res.header("Access-Control-Allow-Origin", "*");
// 	res.header("Access-Control-Allow-Headers", "X-Requested-With");
// 	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
// 	res.header("X-Powered-By", ' 3.2.1');
// 	res.header("Content-Type", "application/json;charset=utf-8");
// 	next();
// });
app.use(require('cors')());
// 定义方法
app.get('/shuju', function (req, res) {//这是get请求返回的数据
	res.status(200);
	res.send({//这里写get数据
		mope:Math.round((Math.random()*100)+200),
		tosh:Math.round((Math.random())*100)
	})
});
app.post('/denglu', function (req, res) {//这是post请求返回的数据
	res.status(200);
	res.send({//这里send里面写post数据
		"user":{
			"sub":"开发机构防静电的宽度封口费。",
			"isdel":false,
			"_id":"1541d5f5d4f4445",
			"Name":"vyk",
			"pno":"888888888",
			"passwd":"6666666",
			"cno":"55555",
			"cname":"李明",
			"Localtime":"2018-10-15T03:51:06.000Z",
			"dep":"5bc5f4d5f5d"
		},
		"code":1,
		"msg":"登陆成功",
		"token":"eykdfhdjfh"
	})
});

//定义端口，此处所用为3000端口，可自行更改
var server = app.listen(3000,function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
})