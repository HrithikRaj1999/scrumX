import { Router } from "express";
import { getTeams } from "../controllers/team.controller";


const teamRoute = Router();

teamRoute.get("/", getTeams);

export default teamRoute;