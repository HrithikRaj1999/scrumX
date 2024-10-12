import { Router } from "express";
import { createTask, getTasks, getUserTasks, updateTaskStatus } from "../controllers/task.controllers";
import { validateData } from "../middleware/validations.middleware";
import { createTaskSchema } from "../validationSchemas/task.schemas";

const taskRoutes = Router();

taskRoutes.get("/", getTasks);
taskRoutes.patch("/:taskId/status", updateTaskStatus);

taskRoutes.post("/", validateData(createTaskSchema), createTask);
taskRoutes.get("/user/:userId", getUserTasks);
export default taskRoutes;
