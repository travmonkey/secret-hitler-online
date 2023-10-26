"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const port = 5002;
app.use(body_parser_1.default.urlencoded());
app.use("/public", express_1.default.static('public'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('../views/pages/index', {});
});
app.post('/submit', (req, res) => {
    const name1 = req.body.name;
    const age1 = req.body.age;
    console.log('Recieved the data:', name1, age1);
    res.send('Recieved.');
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
