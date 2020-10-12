var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello World Namaku Umar Jati");
});

app.listen(4000);