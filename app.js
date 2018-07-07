
var fs = require("fs");
var express = require('express')
    , http = require('http');
var app = express();
var http = require('http');
var server = http.createServer(app);
var PORT = 9999;
var websocket = require('socket.io').listen(server);

app.use(express.static("files"))

app.get("/", function (req, res) {
    res.redirect("/ding.html")
} )

app.get("/ding", function (req, res) {
    res.send("here is some text")
    websocket.sockets.emit("ding", "nothing")
})

server.listen(PORT);
console.log('Ding listening on port ', PORT);



