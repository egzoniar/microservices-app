"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var PORT = process.env.PORT;
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/", function (req, res) {
    res.json("Service Three");
});
app.listen(PORT, function () {
    console.log("Service One is listening to port ".concat(PORT));
});
