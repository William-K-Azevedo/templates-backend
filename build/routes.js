"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TesteRoutes_1 = __importDefault(require("./app/routes/TesteRoutes"));
const routes = (0, express_1.Router)();
routes.use(TesteRoutes_1.default);
exports.default = routes;
