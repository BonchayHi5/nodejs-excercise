const requestHandler = (req, res) => {
    const url = req.url;

    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text-plain' });
        res.write('Hello World');
        res.end();
    }else if(url==='/about'){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.write('About page');
        res.end();

    }

}
module.exports = requestHandler;
