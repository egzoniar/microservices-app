"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/", function (req, res) {
    res.json("Service One");
});
app.listen(8000, function () {
    console.log("Service One is listening to port 8000");
});
