let http = require('http');

http.createServer((req, res) => {
    if (req.url === '/jk') {
      
        
        res.end('show()');
    }
    
}).listen(80, '127.0.0.1')