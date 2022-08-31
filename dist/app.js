"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_errors_1 = __importDefault(require("http-errors"));
const dotenv_1 = require("dotenv");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
(0, dotenv_1.config)();
app.get("/", (req, res) => {
    res.send(`<H1>Hello World this is Samir Alam.</H1> <H1>Hosting from EC2.</H1>`);
});
app.use((req, res, next) => {
    console.warn("not found", req.url);
    next(new http_errors_1.default.NotFound());
});
const PORT = Number(process.env.PORT);
app.listen(PORT, () => console.log(`Server running in port ${PORT}`));
