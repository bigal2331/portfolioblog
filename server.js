var express = require('express');
var app = express();
var sequelize = require("/models/sqlz");
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);



app.get('/', function(req, res){
    
    res.render('index.html');
    
})

app.get('/new', function(req, res){
    
    res.render('new.html');
    
})
app.listen(8080,function(){
  
  console.log("Server listening at", process.env.PORT);
});