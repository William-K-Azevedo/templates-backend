"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TesteController_1 = require("../controllers/TesteController");
const testeRouter = (0, express_1.Router)();
testeRouter.get("/", TesteController_1.GetOne);
exports.default = testeRouter;
