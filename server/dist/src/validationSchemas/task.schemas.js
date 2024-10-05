"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTaskSchema = void 0;
const zod_1 = require("zod");
exports.createTaskSchema = zod_1.z.object({
    title: zod_1.z.string().min(1, "title is required and cannot be empty"),
    description: zod_1.z.string().optional(),
    status: zod_1.z.string().optional(),
    priority: zod_1.z.string().optional(),
    tags: zod_1.z.string().optional(),
    startDate: zod_1.z.string().optional(), // You can add a date validation if needed, e.g., refine for ISO date
    dueDate: zod_1.z.string().optional(), // Similar to startDate, you can validate as a date if needed
    points: zod_1.z.number().optional(), // Points can be optional and a number
    projectId: zod_1.z.number().min(1, "projectId is required and cannot be empty"),
    authorUserId: zod_1.z
        .number()
        .min(1, "authorUserId is required and cannot be empty"),
    assignedUserId: zod_1.z.number().optional(), // This field can be optional
});
