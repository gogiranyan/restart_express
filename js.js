/*chat.js*/
$(function(){
    /*建立socket連接，連向server監聽的端口號*/
    var socket = io('ws://localhost:3000');
    /*你的名稱*/
    var myName = null;
    console.log('inin');
    /*登入事件*/
    $('.login-btn').click(function(){
        console.log('inin');
        myName = $.trim($('#loginName').val());
        if(myName){
            /*發送事件*/
            socket.emit('login', {username: myName})
        }else{
            alert('Please enter a name:)')
        }
    })
})