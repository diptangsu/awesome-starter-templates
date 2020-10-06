import { Router, Request, Response, NextFunction } from "express";

import validateQuery from "../util/validateQuery";
import {
  userPostRequest,
  userPostRequestSchema,
  userSearch,
  userSearchSchema,
  userId,
  userIdSchema,
  userPutRequestSchema,
  userPutRequest,
} from "./users.schema";
import {
  getAllUsers,
  addUser,
  getUserByUsername,
  getUserById,
  deleteUser,
  updateUser,
} from "./users.service";

const router: Router = Router();

const handleGetUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await getAllUsers();
    res.json({
      users,
    });
  } catch (err) {
    next(err);
  }
};

const handlePostUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const input = req.body as userPostRequest;
    await addUser(input);
    res.status(201).json({
      message: "User created.",
    });
  } catch (err) {
    next(err);
  }
};

const handleGetUserSearch = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username } = req.query as userSearch;
    const user = await getUserByUsername(username);
    res.status(200).json({
      user: user,
    });
  } catch (err) {
    next(err);
  }
};

const handleGetUserId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.params as userId;
    const user = await getUserById(userId);
    res.status(200).json({
      user: user,
    });
  } catch (err) {
    next(err);
  }
};

const handleDeleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.params as userId;
    await deleteUser(userId);
    res.json({
      message: `UserID ${userId} deleted.`,
    });
  } catch (err) {
    next(err);
  }
};

const handlePutUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const inputData = req.body as userPutRequest;
    const { userId } = req.params as userId;
    await updateUser(userId, inputData);
    res.json({
      message: `UserID ${userId} updated.`,
    });
  } catch (err) {
    next(err);
  }
};

router.get("/users", handleGetUsers);
router.post(
  "/users",
  validateQuery("body", userPostRequestSchema),
  handlePostUsers
);
router.get(
  "/users/search",
  validateQuery("query", userSearchSchema),
  handleGetUserSearch
);
router.get(
  "/users/:userId",
  validateQuery("params", userIdSchema),
  handleGetUserId
);
router.delete(
  "/users/:userId",
  validateQuery("params", userIdSchema),
  handleDeleteUser
);

router.put(
  "/users/:userId",
  validateQuery("params", userIdSchema),
  validateQuery("body", userPutRequestSchema),
  handlePutUser
);

export default router;
