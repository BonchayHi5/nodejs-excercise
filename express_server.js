const express = require('express');

const app = express();


app.use('/user',(req,res,next) => {
    res.send('<p>The middleware handle user</p>')
});


app.use('/',(req,res,next)=>{
    res.send('<p>The middleware handle /</p>')
});


app.listen(3000);  