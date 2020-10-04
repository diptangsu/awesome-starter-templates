const fs = require("fs").promises;
const path = require("path");
const { v4 } = require("uuid");

const handlePostUser = async (req, res, next) => {
  try {
    const { username, age, name } = req.body;
    const users = JSON.parse(
      await fs.readFile(path.join(__dirname, "..", "fakeDB.json"))
    );
    const findDuplicate = users.find((e) => e.username === username);
    if (findDuplicate)
      throw { httpStatus: 400, message: "Username already exists." };
    const id = v4();
    users.push({
      id,
      username,
      age,
      name,
    });
    await fs.writeFile(
      path.join(__dirname, "..", "fakeDB.json"),
      JSON.stringify(users)
    );
    res.status(201).json({
      message: "User created.",
    });
  } catch (err) {
    next(err);
  }
};

const handleGetUsers = async (req, res, next) => {
  try {
    const users = JSON.parse(
      await fs.readFile(path.join(__dirname, "..", "fakeDB.json"))
    );
    res.status(200).json({
      users,
    });
  } catch (err) {
    next(err);
  }
};

const handleGetUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const users = JSON.parse(
      await fs.readFile(path.join(__dirname, "..", "fakeDB.json"))
    );
    const findUser = users.find((e) => e.id === userId);
    if (!findUser) return res.status(404).json({ message: "User not found." });
    res.status(200).json({
      user: findUser,
    });
  } catch (err) {
    next(err);
  }
};

const handleDeleteUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    let users = JSON.parse(
      await fs.readFile(path.join(__dirname, "..", "fakeDB.json"))
    );
    const findUser = users.find((e) => e.id === userId);
    if (!findUser) return res.status(404).json({ message: "User not found." });

    users = users.filter((e) => e.id !== userId);
    await fs.writeFile(
      path.join(__dirname, "..", "fakeDB.json"),
      JSON.stringify(users)
    );

    res.status(200).json({
      message: `UserID ${findUser.id} deleted.`,
    });
  } catch (err) {
    next(err);
  }
};

const handlePutUser = async (req, res, next) => {
  try {
    const { username, name, age } = req.body;
    const { userId } = req.params;
    let users = JSON.parse(
      await fs.readFile(path.join(__dirname, "..", "fakeDB.json"))
    );
    const findUser = users.find((e) => e.id === userId);
    if (!findUser) return res.status(404).json({ message: "User not found." });

    const updatedUsers = users.map((e) => {
      let updatedUser = { ...e };
      if (e.id === userId) {
        updatedUser.name = name ? name : e.name;
        updatedUser.age = age ? age : e.age;
        if (username) {
          const duplicateUsername = users.find(
            (ele) => ele.username === username
          );
          if (duplicateUsername)
            throw { httpStatus: 400, message: "Username exists." };
          updatedUser.username = username;
        }
      }
      return updatedUser;
    });
    await fs.writeFile(
      path.join(__dirname, "..", "fakeDB.json"),
      JSON.stringify(updatedUsers)
    );

    res.status(200).json({
      message: `UserID ${findUser.id} updated.`,
    });
  } catch (err) {
    next(err);
  }
};

const handleGetSearch = async (req, res, next) => {
  try {
    const { username } = req.query;
    const users = JSON.parse(
      await fs.readFile(path.join(__dirname, "..", "fakeDB.json"))
    );
    const findUser = users.find((e) => e.username === username);
    if (!findUser) return res.status(404).json({ message: "User not found." });
    res.status(200).json({
      user: findUser,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  handlePostUser,
  handleGetUsers,
  handleGetUser,
  handleDeleteUser,
  handlePutUser,
  handleGetSearch,
};
