// var http = require('http');
var fs = require('fs');
var dt = require('./resources/datas');
var dtp = require('./datas_procesor.js');

var express = require('express');
var app = express();

var coolViewManager = (req, res) => {
  fs.readFile('./templates/data_reader.html', (err, dataReaded) => {
    let workProcesor = new dtp.dataProcessor(dt.datasGenerator);
    res.send(workProcesor.injectDatas(dataReaded));
  });
}

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.send(JSON.stringify(dt.datasGenerator));
});

app.get('/coolView', coolViewManager);

var server = app.listen(8081, () => {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
