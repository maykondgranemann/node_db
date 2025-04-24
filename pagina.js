const http = require('http');
const fs = require('fs');

function lerHtml(){
    const pagina = fs.readFileSync('index.html');
    return pagina;
}


const server = http.createServer((req, res) =>{
    console.log(req);
    console.log(req.headers['sec-ch-ua']);
    console.log(req.headers['accept-language']);
    console.log(req.headers['sec-ch-ua-platform']);
    res.writeHead(201, {'content-type':'text/html'});
    res.end(lerHtml());
})

server.listen(80, ()=>{
    console.log('Servidor rodando em http://localhost:80');
})