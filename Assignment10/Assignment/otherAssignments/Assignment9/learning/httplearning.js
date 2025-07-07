const http = require('http');
const path = require('path');
const {URL} = require('url');
const fs = require('fs');

let todos = [
    { id: 1, task: 'Learn Node.js', completed: false },
    { id: 2, task: 'Build an API', completed: false }
  ];


const server = http.createServer((req, res)=>{
    const {method, url} = req;
    const parsedUrl = new URL(url, `http://${req.headers.host}`);
    const pathname = parsedUrl.pathname;

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');


    if(method === "GET" && pathname === "/todos"){
        res.writeHead(200, {"content-type": 'application/json'});
        res.end(JSON.stringify(todos, null, 2));
    }

    if(method === "POST" && pathname === "/todos"){
        let body = '';

        req.on('data', (chunk)=>{
            body += chunk.toString();
        })

        req.on('end', ()=>{
            try{
                const newTodo = JSON.parse(body);
                newTodo.id = todos.length > 0 ? Math.max(...todos.map((val)=> val.id)) +1 : 1;
                todos.push(newTodo);
                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(newTodo, null, 2));
            }
            catch(err){
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Invalid JSON' }));
            }
        })
    }

    else if (method === 'PUT' && pathname.startsWith('/todos/')) {
        const id = parseInt(pathname.split('/')[2]);
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            try {
            const updatedTodo = JSON.parse(body);
            const index = todos.findIndex(t => t.id === id);

            if (index === -1) {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Todo not found' }));
            } else {
                todos[index] = { ...todos[index], ...updatedTodo };
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(todos[index]));
            }
            } catch (error) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Invalid JSON' }));
            }
        });
    }
    else if (method === 'DELETE' && pathname.startsWith('/todos/')) {
        const id = parseInt(pathname.split('/')[2]);
        const index = todos.findIndex(t => t.id === id);

        if (index === -1) {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Todo not found' }));
        } else {
            todos = todos.filter(t => t.id !== id);
            res.writeHead(204);
            res.end();
        }
    }
    else if (method === 'GET' && pathname.startsWith('/')){
        const filepath = path.join(__dirname, req.url);
        fs.access(filepath, (err)=>{
            if (err) {
                res.statusCode = 404;
                res.end('File not found');
                return;
            }
            fs.stat(filepath, (err, stats)=>{
                if (err) {
                    res.statusCode = 500;
                    res.end('Server error');
                    return;
                }

                res.setHeader('Content-Length', stats.size);
                res.setHeader('Content-Type', 'application/octet-stream');

                const stream = fs.createReadStream(filepath);

                stream.on('error', (err) => {
                    console.error('Error reading file:', err);
                    if (!res.headersSent) {
                      res.statusCode = 500;
                      res.end('Error reading file');
                    }
                  });
                stream.pipe(res);

            })

        });
    }
    else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Not Found' }));
    }

})

server.listen(3000, 'localhost', ()=>{
    console.log("server running on port 3000");
})