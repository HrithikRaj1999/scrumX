import { Router } from "express";
import { createProject, getProjects } from "../controllers/project.controllers";
import { validateData } from "../middleware/validations.middleware";
import { createProjectSchema } from "../validationSchemas/project.schema";

const projectRoutes = Router();

projectRoutes.get("/", getProjects);
projectRoutes.post("/", validateData(createProjectSchema), createProject);

export default projectRoutes;
