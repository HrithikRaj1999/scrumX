import { Request, Response } from "express";
import { Prisma, PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";

const prisma = new PrismaClient();
const { project } = prisma;

export const getProjects = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const projects = await project.findMany({});
    res.status(StatusCodes.OK).json(projects);
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Error retrieving projects" });
  }
};

export const createProject = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { name, description, startDate, endDate } = req.body;
  try {
    const existingProject = await project.findFirst({ where: { name } });
    if (existingProject) {
      res
        .status(StatusCodes.CONFLICT)
        .json({ message: "Project with the same name already exists" });
      return;
    }
    const newProject = await project.create({
      data: {
        name,
        description,
        startDate,
        endDate,
      },
    });
    res.status(StatusCodes.CREATED).json(newProject);
    return;
  } catch (error: any) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: `Error creating a project: ${error.message}` });
    return;
  }
};
