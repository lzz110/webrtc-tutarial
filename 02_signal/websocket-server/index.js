var ws = require("nodejs-websocket")
// var ws = require("ws")
const packageConfig = require('./package.json').config;
const port = packageConfig.port;
log("DEBUG", "WS will create a server listen at ws://localhost:" + port + "/, please make sure your client has set the right port!!!");

var user = 0;
// 创建一个连接
var server = ws.createServer(function (conn) {
  user++;
  conn.nickname = "user" + user;
  
  log("DEBUG", "create a new ws connection for " + conn.nickname + " -----");

  var mes = {};
  mes.type = "enter";
  mes.data = conn.nickname + " is coming"
  broadcast(JSON.stringify(mes)); // 广播

  //向客户端推送消息
  conn.on("text", function (str) {
    
    log("DEBUG", "receive message: " + conn.nickname + ": " + str);
    mes.type = "message";
    mes.data = conn.nickname + " saying: " + str;
    broadcast(JSON.stringify(mes));
  });

  //监听关闭连接操作
  conn.on("close", function (code, reason) {
    
    log("DEBUG", "close connection  " + conn.nickname + " -----");
    mes.type = "leave";
    mes.data = conn.nickname + " leave"
    broadcast(JSON.stringify(mes));
  });
  
  
  // 监听错误事件
  conn.on('error', (err) => {
    if (err.code === 'ECONNRESET') {
      log("DEBUG", "connection has reset may caused by " + conn.nickname + " connection close the Tab");
    } else {
      log("ERROR", "has occur an error: " + err);
    }
  });

}).listen(port);

function broadcast(str) {
  server.connections.forEach(function (connection) {
    connection.sendText(str);
  })
}

// 日志辅助函数
function log(level, message) {
  console.log(level + " - " + message);
}