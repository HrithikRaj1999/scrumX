import { Router } from "express";
import { createTask, getTasks } from "../controllers/task.controllers";
import {
  validateData,
  validateParamsAndQuery,
} from "../middleware/validations.middleware";
import {
  createTaskSchema,
  getTasksSchema,
} from "../validationSchemas/task.schemas";

const taskRoutes = Router();

taskRoutes.get("/", validateParamsAndQuery(getTasksSchema), getTasks);
taskRoutes.post("/", validateData(createTaskSchema), createTask);


export default taskRoutes;
