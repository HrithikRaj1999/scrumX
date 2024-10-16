import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import projectRoutes from "./routes/project.routes";
import taskRoutes from "./routes/task.routes";
import searchRoute from "./routes/search.routes";
import userRoute from "./routes/user.route";
import teamRoute from "./routes/team.routes";

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/*Routes */

app.get("/", (req, res) => {
  res.send("Welcome to the scrum project management  API");
});

app.use("/projects", projectRoutes);
app.use("/tasks", taskRoutes);
app.use("/search", searchRoute);
app.use("/users", userRoute);
app.use("/teams", teamRoute);


app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`); // display server running message on console.log
});
