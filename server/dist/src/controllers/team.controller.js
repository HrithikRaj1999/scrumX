"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTeams = void 0;
const client_1 = require("@prisma/client");
const http_status_codes_1 = require("http-status-codes");
const prisma = new client_1.PrismaClient();
const getTeams = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const teams = yield prisma.team.findMany();
        const teamsWithUsernames = yield Promise.all(teams.map((team) => __awaiter(void 0, void 0, void 0, function* () {
            const productOwner = yield prisma.user.findUnique({
                where: { userId: team.productOwnerUserId },
                select: { username: true, profilePictureUrl: true },
            });
            const projectManager = yield prisma.user.findUnique({
                where: { userId: team.projectManagerUserId },
                select: { username: true, profilePictureUrl: true },
            });
            return Object.assign(Object.assign({}, team), { productOwnerUsername: productOwner === null || productOwner === void 0 ? void 0 : productOwner.username, productOwnerImageUrl: productOwner === null || productOwner === void 0 ? void 0 : productOwner.profilePictureUrl, projectManagerUsername: projectManager === null || projectManager === void 0 ? void 0 : projectManager.username, projectManagerImageUrl: projectManager === null || projectManager === void 0 ? void 0 : projectManager.profilePictureUrl });
        })));
        res.json(teamsWithUsernames);
    }
    catch (error) {
        res
            .status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR)
            .json({ message: `Error retrieving teams: ${error.message}` });
    }
});
exports.getTeams = getTeams;
