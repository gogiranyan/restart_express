let express = require('express');//1.載入express模組
let app = express();// 2.使用express
let path = require('path');
var server = require('http').createServer(app);//建立http伺服器
let io = require('socket.io')(server);

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

io.on('connection', function(socket){
  /*監聽登入事件*/
  socket.on('login', function(data){
      console.log(data)
  })
})

