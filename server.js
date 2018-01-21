var express = require('express');
var Msg = require("./models/sqlz");
var bodyParser = require('body-parser');
var path = require("path")

var app = express();
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());


app.get('/', function(req, res){
    
  
       
        
        
        res.render('index');
        
    
    
})

app.get('/new', function(req, res){
   
     res.render('new',{message:''});
    
})


app.get('/posts', function(req, res){
    Msg.findAll().then(function(rows){
     res.render('posts',{messages:rows});
    })
})

app.post('/new', function(req, res){
     if(req.body.title.length < 1 || req.body.msg.length < 1){
         console.log('this is the body', req.body.title.length)
        res.render('new',{message:'Please complete the entire form'});
    }else{
       Msg.sync().then(function(){
        
            Msg.create({
                title: req.body.title,
                body: req.body.msg
            });
            res.redirect('/')
        });  
    }
   
    
});

app.listen(8080,function(){
  
  console.log("Server listening at", process.env.PORT);
});