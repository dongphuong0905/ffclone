const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello world from nodejs ');
        res.end();
        while (true)
            console.log("ccccc")
    } else {
        res.write('CCCCCC');
        res.end();
    }
});

server.listen('3000');
