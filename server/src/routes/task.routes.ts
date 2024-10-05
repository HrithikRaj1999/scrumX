import { Router } from "express";
import { createTask, getTasks, updateTaskStatus } from "../controllers/task.controllers";
import { validateData } from "../middleware/validations.middleware";
import { createTaskSchema } from "../validationSchemas/task.schemas";

const taskRoutes = Router();

taskRoutes.get("/", getTasks);
taskRoutes.patch("/:taskId/status", updateTaskStatus);

taskRoutes.post("/", validateData(createTaskSchema), createTask);

export default taskRoutes;
