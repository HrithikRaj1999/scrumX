import { z } from "zod";

export const getTasksSchema = z.object({
  projectId: z.string().min(1, "projectId is required and cannot be empty"),
});

export const createTaskSchema = z.object({
  title: z.string().min(1, "title is required and cannot be empty"),
  description: z.string().optional(),
  status: z.string().optional(),
  priority: z.string().optional(),
  tags: z.string().optional(),
  startDate: z.string().optional(), // You can add a date validation if needed, e.g., refine for ISO date
  dueDate: z.string().optional(), // Similar to startDate, you can validate as a date if needed
  points: z.number().optional(), // Points can be optional and a number
  projectId: z.number().min(1, "projectId is required and cannot be empty"),
  authorUserId: z.number().min(1, "authorUserId is required and cannot be empty"),
  assignedUserId: z.number().optional(), // This field can be optional
});
