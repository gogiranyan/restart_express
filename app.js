let express = require('express');//1.載入express模組
let app = express();// 2.使用express
let fs = require('fs-extra');
let axios = require('axios');
let path = require('path');
let io = require('socket.io');
let i = 20;

app.use('/',express.static(path.join(__dirname,'./public')));
// app.get('/', function (req, res) {
//   res.send('Hello');
//   res.sendFile( '/index.html');
//   console.log('into');
// })
app.get('/mac_first_post',function(req,res){
  

})
app.get('/i', (req, res) => {    
  
	var options = {
        root: __dirname,    
		headers: {
		  "Content-Type": "text/html"
		}
	}
  console.log(options);
	res.sendFile('/public/index.html',options, function(error){
		if(error){
			console.log('Sent failed:', 'index.html' + error);
		}else{
			console.log('Sent sucess:', 'index.html');
		}
	});

});



app.post('/test', function(req, res) {
  console.log(req.body.name);
  console.log(req.body.tel);
  console
});


app.get('/pp', function (req, res) {
  res.send('pp');
  
  console.log('into');
})


app.listen(3000, '127.0.0.1', function() {
    console.log('Listening to port:  ' + 3000);
});



// app.listen(80);
// var handler = (req, res) => {
//   fs.readFile(__dirname + './index.html', (err, data) => {
//   if (err) {
//     res.writeHead(500);
//     return res.end('Error loading index.html');
//   }
//   res.writeHead(200);
//   res.end(data);
//   })
// }
// io.on('connection', (socket) => {
//   socket.emit('news', {  //觸發'news'事件
//   hello: 'world'
//   });
//   socket.on('my other event', (data) => {  //監聽'my other event'事件，有結果後輸出
//   console.log(data);
//   })
// })