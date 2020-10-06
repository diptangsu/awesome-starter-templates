import { DatabaseService } from "../services/database.service";
import { userDBSchema, userPostRequest, userPutRequest } from "./users.schema";
import * as MongoDB from "mongodb";

/**
 * Get the list of all users
 * @returns {Promise<Array<userDBSchema>>} The list of users
 */
export const getAllUsers = async (): Promise<Array<userDBSchema>> => {
  const db = await DatabaseService.getInstance().getDb("users");
  const users = db.find<userDBSchema>({}).toArray();
  return users;
};

/**
 * Adds a new user.
 * @param {userPostRequest} input The user input.
 * @returns {Promise<void>} Successful insertion of user if no error.
 */
export const addUser = async (input: userPostRequest) => {
  const db = await DatabaseService.getInstance().getDb("users");
  const duplicateUser = await db.findOne({ username: input.username });
  if (duplicateUser)
    throw { httpStatus: 400, message: "Username already exsists." };
  const result = await db.insertOne({
    username: input.username,
    age: +input.age,
    name: input.name,
  });
  if (result.insertedCount === 0) {
    throw { httpStatus: 500, message: "Error adding user." };
  }
};

/**
 * Find a user by username.
 * @param {string} username The input username
 * @returns {Promise<userDBSchema>} The user document, if found
 */
export const getUserByUsername = async (
  username: string
): Promise<userDBSchema> => {
  const db = await DatabaseService.getInstance().getDb("users");
  const user = await db.findOne<userDBSchema>({ username: username });
  if (!user) throw { httpStatus: 404, message: "User not found." };
  return user;
};

/**
 * Find a user by username.
 * @param {string} userId The input username
 * @returns {Promise<userDBSchema>} The user document, if found
 */
export const getUserById = async (userId: string): Promise<userDBSchema> => {
  const db = await DatabaseService.getInstance().getDb("users");
  const user = await db.findOne<userDBSchema>({
    _id: new MongoDB.ObjectId(userId),
  });
  if (!user) throw { httpStatus: 404, message: "User not found." };
  return user;
};

/**
 * Deletes a user.
 * @param {string} userId The user ID to be deleted
 * @returns {Promise<void>} Returns if deletion successful
 */
export const deleteUser = async (userId: string): Promise<void> => {
  const db = await DatabaseService.getInstance().getDb("users");
  const result = await db.findOneAndDelete({
    _id: new MongoDB.ObjectID(userId),
  });
  if (!result.value) throw { httpStatus: 404, message: "User not found." };
};

export const updateUser = async (
  userId: string,
  inputData: userPutRequest
): Promise<void> => {
  const db = await DatabaseService.getInstance().getDb("users");
  const duplicateUsername = await db.findOne<userDBSchema>({
    username: inputData.username,
  });
  if (duplicateUsername) {
    throw { httpStatus: 400, message: "Username not available" };
  }

  const result = await db.findOneAndUpdate(
    { _id: new MongoDB.ObjectID(userId) },
    {
      $set: {
        ...(inputData.username && { username: inputData.username }),
        ...(inputData.age && { age: +inputData.age }),
        ...(inputData.name && { name: inputData.name }),
      },
    },
    { returnOriginal: false }
  );
  if (!result.value) throw { httpStatus: 404, message: "User not found." };
};
