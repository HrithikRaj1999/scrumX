import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";

const prisma = new PrismaClient();

export const getTeams = async (req: Request, res: Response): Promise<void> => {
  try {
    const teams = await prisma.team.findMany();

    const teamsWithUsernames = await Promise.all(
      teams.map(async (team: any) => {
        const productOwner = await prisma.user.findUnique({
          where: { userId: team.productOwnerUserId! },
          select: { username: true, profilePictureUrl: true },
        });

        const projectManager = await prisma.user.findUnique({
          where: { userId: team.projectManagerUserId! },
          select: { username: true, profilePictureUrl: true },
        });

        return {
          ...team,
          productOwnerUsername: productOwner?.username,
          productOwnerImageUrl: productOwner?.profilePictureUrl,
          projectManagerUsername: projectManager?.username,
          projectManagerImageUrl: projectManager?.profilePictureUrl,
        };
      })
    );

    res.json(teamsWithUsernames);
  } catch (error: any) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: `Error retrieving teams: ${error.message}` });
  }
};
