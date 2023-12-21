var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;

    fs.readFile(filename, function (err, data) {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end("404 Not Found");
            } else {
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.end("Internal Server Error");
            }
        } else {
            var contentType = getContentType(filename);
            res.writeHead(200, { 'Content-Type': contentType, 'Content-Length': data.length });
            res.write(data);
            res.end();
        }
    });
}).listen(8888);

function getContentType(filename) {
    var extname = path.extname(filename);
    switch (extname) {
        case '.html':
            return 'text/html';
        case '.css':
            return 'text/css';
        case '.js':
            return 'text/javascript';
        case '.png':
            return 'image/png';
        case '.jpg':
            return 'image/jpg';
        case '.gif':
            return 'image/gif';
        default:
            return 'application/octet-stream';
    }
}