"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/api/images', (req, res) => {
    res.send('Hello world!');
});
app.listen(port, () => {
    console.log(`server started at localhost:${port}`);
});
//const myFunc = (num: number): number => { return num * num; };
exports.default = app;
