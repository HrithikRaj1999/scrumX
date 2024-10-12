"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const team_controller_1 = require("../controllers/team.controller");
const teamRoute = (0, express_1.Router)();
teamRoute.get("/", team_controller_1.getTeams);
exports.default = teamRoute;
