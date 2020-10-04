const router = require("express").Router();
const {
  validateUserQuery,
  validateUserIdParam,
  validateUserPutQuery,
  validateUsernameSearch,
} = require("../models/users.model");
const {
  handlePostUser,
  handleGetUsers,
  handleGetUser,
  handleDeleteUser,
  handlePutUser,
  handleGetSearch,
} = require("../controllers/users.controller");

router.post("/users", validateUserQuery, handlePostUser);
router.get("/users", handleGetUsers);
router.get("/users/search", validateUsernameSearch, handleGetSearch);
router.get("/users/:userId", validateUserIdParam, handleGetUser);
router.put(
  "/users/:userId",
  validateUserIdParam,
  validateUserPutQuery,
  handlePutUser
);
router.delete("/users/:userId", validateUserIdParam, handleDeleteUser);

module.exports = router;
