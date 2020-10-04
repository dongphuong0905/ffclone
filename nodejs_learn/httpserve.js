const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const readSteam = fs.createReadStream('./static/example.png')
    res.writeHead(200, { 'Content-type': 'image/png' });
    readSteam.pipe(res);
});
server.listen('3000');
