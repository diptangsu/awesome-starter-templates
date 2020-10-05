//Import dependencies
import express, { Express, Request, Response, NextFunction } from "express";
import { config as dotenvConfig } from "dotenv";
import { join } from "path";

//Configure the environmental variables
dotenvConfig();

//Configure the express application
const app: Express = express();
app.set("view engine", "ejs");
app.set("views", join(__dirname, "..", "views"));

//Mount routes
app.get("/hello", (req: Request, res: Response, next: NextFunction) => {
  res.render("hello");
});

//Listen for requests
app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
