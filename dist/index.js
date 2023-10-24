"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const port = 5002;
app.use(body_parser_1.default.json());
app.use("/public", express_1.default.static('public'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('../views/pages/index');
});
app.post('/submit', (req, res) => {
    console.log('Recieved the data:', req.body);
    res.send('Recieved.');
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
