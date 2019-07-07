const express = require("express");

const index = require("./routes/index.js");

const bodyParser = require("body-parser");


/* 服务器创建 */

var server = express();
server.listen(3000,function(){
	console.log("Server listening 3000 port...");
});


/* 配置托管文件夹 */
server.use(express.static("./public"));

/* 配置post请求数据处理方法 */
server.use(bodyParser.urlencoded({
	extended: false
}));

/* 配置路由器路径 */
server.use("/index",index);
