const jsonServer = require('json-server');
const path = require('path');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json')); // Path ke 'db.json' dalam folder 'api'
const middlewares = jsonServer.defaults();

// Middleware untuk mengizinkan permintaan dari asal yang berbeda (CORS)
server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

server.use(middlewares);
server.use(router);

server.listen(3000, () => {
    console.log('JSON Server is running on port 3000');
});
