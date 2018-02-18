var http = require('http');
var fs = require('fs');
var dt = require('./resources/datas');
var dtp = require('./datas_procesor.js');

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var data = dt.datasGenerator;

  if(req.url === '/coolView'){
    fs.readFile('./templates/data_reader.html', (err, dataReaded) => {
      let workProcesor = new dtp.dataProcessor(data);
      res.write(workProcesor.injectDatas(dataReaded));
      res.end();
    });
  }else{
    res.end(JSON.stringify(data));
  }
}).listen(8080);
