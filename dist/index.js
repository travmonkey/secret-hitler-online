"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const node_http_1 = require("node:http");
const socket_io_1 = require("socket.io");
const app = (0, express_1.default)();
const server = (0, node_http_1.createServer)(app);
const io = new socket_io_1.Server(server);
const port = 5002;
app.use(body_parser_1.default.urlencoded());
app.use("/public", express_1.default.static('public'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('../views/pages/index', {});
});
app.get('/message', (req, res) => {
    res.render('../views/pages/messaging', {});
});
io.on('connection', (socket) => {
    console.log('a user has connected');
});
app.post('/submit', (req, res) => {
    const name1 = req.body.name;
    const age1 = req.body.age;
    console.log('Recieved the data:', name1, age1);
    res.send('Recieved.');
});
server.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
