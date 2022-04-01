const http = require('http');
const { PORT } = require('./env');
const app = require('./app');

const server = http.createServer(app);

server.listen(+PORT);
server.on('error', console.error);
server.on('listening', () => console.log(`Server running on ${PORT}`));
