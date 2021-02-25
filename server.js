const http = require('http');
const route = require('./routes.js');

const server =  http.createServer(route);



server.listen(3000,()=>{
    console.log('Node server create at port 3000')
});