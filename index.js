var express = require('express');
var app = express();
var port = 3000;

app.listen(`${port}`,function(){
    console.log("rodandando...");
});

app.get(`/teste`,function(req,res){
    console.log("teste ok porta 3000.");
    res.send("OK.");
});