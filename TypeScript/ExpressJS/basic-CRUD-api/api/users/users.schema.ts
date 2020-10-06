import * as yup from "yup";
import * as MongoDB from "mongodb";
import { type } from "os";

const usernameSchema = yup
  .string()
  .trim()
  .min(3, "username cannot be less than 3 characters")
  .max(16)
  .matches(/^[a-z0-9._-]{3,16}$/, "invalid username");
const ageSchema = yup.number().positive();
const nameSchema = yup.string().trim().min(1, "name cannot be null");

export const userPostRequestSchema = yup
  .object({
    username: usernameSchema.required(),
    age: ageSchema.required(),
    name: nameSchema.required(),
  })
  .required();

export type userPostRequest = yup.InferType<typeof userPostRequestSchema>;

export interface userDBSchema extends userPostRequest {
  _id: MongoDB.ObjectId;
}

export const userSearchSchema = yup
  .object({
    username: usernameSchema.required(),
  })
  .required();

export type userSearch = yup.InferType<typeof userSearchSchema>;

export const userIdSchema = yup
  .object({
    userId: yup
      .string()
      .trim()
      .min(1, "user-id cannot be null")
      .test("userId", "user-id is not valid", (value) => {
        if (value && MongoDB.ObjectID.isValid(value)) return true;
        return false;
      })
      .required(),
  })
  .required();

export type userId = yup.InferType<typeof userIdSchema>;

export const userPutRequestSchema = yup
  .object({
    username: usernameSchema,
    age: ageSchema,
    name: nameSchema,
  })
  .test(
    "at-least-one",
    "atleast one of the fields ['username', 'age', 'name'] has to be provided",
    (value) => {
      if (value?.username || value?.age || value?.name) return true;
      return false;
    }
  )
  .required();

export type userPutRequest = yup.InferType<typeof userPutRequestSchema>;
