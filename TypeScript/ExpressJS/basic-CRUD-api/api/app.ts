import express, { Express, Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import { config as dotenvConfig } from "dotenv";

import { DatabaseService } from "./services/database.service";
import userRoutes from "./users/users.routes";

dotenvConfig();
const app: Express = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", userRoutes);
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json({
    status: "Running",
  });
});

app.use("*", (req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    message: `Cannot ${req.method} ${req.originalUrl}`,
  });
});

interface APIError extends Error {
  httpStatus?: number;
}

app.use((err: APIError, req: Request, res: Response, next: NextFunction) => {
  console.log("APIError\n%o", err);
  if (err.httpStatus) {
    res.status(err.httpStatus).json({
      message: err.message,
    });
  } else {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

Promise.all([DatabaseService.getInstance().initalize()])
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server started on Port ${process.env.PORT}`);
    });
  })
  .catch((_) => {
    process.exit(1);
  });
