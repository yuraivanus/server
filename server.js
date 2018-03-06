const express =require('express');
const bodyParser= require('body-parser');
const app = express();
const port =8000;
//клієнтська частина знаходиться в папці пиблік
app.use(express.static(__dirname +'/public'));

//стандарти кодування
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    'extetnded':'true'
}));
//усі адреси керуються клієнтським ангуляром
app.get('*',function(req,res){
    res.sendFile(__dirname+'/public/index.html');
});
//запуск
app.listen(port, function(err){
    if(err) throw err;
    console.log('sercer start on port 8000!')
});