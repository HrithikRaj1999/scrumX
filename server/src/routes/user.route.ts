import { Router } from "express";
import { getUser, getUsers, postUser } from "../controllers/users.controoler";


const userRoute = Router();

userRoute.get("/", getUsers);
userRoute.post("/", postUser);
userRoute.get("/:cognitoId", getUser);

export default userRoute;