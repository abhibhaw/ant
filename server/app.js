const express = require('express');

const app = express();

app.get('/', function(req,res){
    res.send('Hello from API');
});

app.listen(4000, ()=>{
    console.log('Server Started at PORT 4000');
});