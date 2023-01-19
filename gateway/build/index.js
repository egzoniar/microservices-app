"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var express_http_proxy_1 = __importDefault(require("express-http-proxy"));
var dotenv_1 = __importDefault(require("dotenv"));
var app = (0, express_1.default)();
dotenv_1.default.config();
var PORT = process.env.PORT;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/service_two", (0, express_http_proxy_1.default)("http://localhost:8002"));
app.use("/service_three", (0, express_http_proxy_1.default)("http://localhost:8003"));
app.use("/", (0, express_http_proxy_1.default)("http://localhost:8001")); // service one
app.listen(PORT, function () {
    console.log("Gateway is running on port ".concat(PORT));
});
