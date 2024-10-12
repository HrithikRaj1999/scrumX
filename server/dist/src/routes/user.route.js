"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controoler_1 = require("../controllers/users.controoler");
const userRoute = (0, express_1.Router)();
userRoute.get("/", users_controoler_1.getUsers);
userRoute.post("/", users_controoler_1.postUser);
userRoute.get("/:cognitoId", users_controoler_1.getUser);
exports.default = userRoute;
