var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
var playercode = "";
app.get('/', (req, res) => { res.send('<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"><title>Kaori</title></head><body><div class="wrapper">'+playercode+'</div><script src="/socket.io/socket.io.js"></script><script>var socket = io();socket.on("syncResult",(syncData) => { if (unsynced) playerSync(syncData); unsynced = false; });socket.on("nextTrack",window.location.reload);socket.emit("syncRequest");</script></body></html>'); });
app.post('/bot', (req, res) => {
	if (req.body.token != process.env.SLACKVTOKEN) {
		res.send("baka hentai");
	} else {
		//TODO: processing the request should happen here I guess
	}
});
var http = require('http').Server(app);

http.listen(8888, function(){
	console.log('init complete');
});
