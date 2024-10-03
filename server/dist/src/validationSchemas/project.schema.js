"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProjectSchema = void 0;
const zod_1 = require("zod");
exports.createProjectSchema = zod_1.z.object({
    name: zod_1.z
        .string()
        .min(1, { message: "Name is required" })
        .max(100, { message: "Name must be less than 100 characters" }),
    description: zod_1.z.string().optional(),
    startDate: zod_1.z.string().refine((date) => !isNaN(Date.parse(date)), {
        message: "Invalid start date format",
    }),
    endDate: zod_1.z
        .string()
        .refine((date) => !isNaN(Date.parse(date)), {
        message: "Invalid end date format",
    })
        .optional(),
});
