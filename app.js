let express = require('express');
  //1.載入express模組
let app = express();
  // 2.使用express
app.get('/', function (req, res) {
    res.send('Hello')
    console.log('into');
})
  // 5.首頁
let port = 3000;
  //3.設定port位置
// app.listen(port);
  // 4.監聽 port

  app.listen(3000, '192.168.1.104', function() {
    console.log('Listening to port:  ' + 3000);
});

app.listen(3001, '127.0.0.1', function() {
    console.log('Listening to port:  ' + 3001);
});