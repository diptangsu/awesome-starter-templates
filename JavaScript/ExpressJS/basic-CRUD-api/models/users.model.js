const Joi = require("@hapi/joi");

/**
 * Decides the user model.
 */
const userPutSchema = Joi.object({
  username: Joi.string()
    .trim()
    .min(3)
    .max(16)
    .regex(/^[a-z0-9._-]{3,16}$/)
    .message("username not valid"),
  age: Joi.number().positive(),
  name: Joi.string().trim().min(1),
})
  .min(1)
  .required();

const userSchema = Joi.object({
  username: Joi.string()
    .trim()
    .min(3)
    .max(16)
    .regex(/^[a-z0-9._-]{3,16}$/)
    .message("username not valid")
    .required(),
  age: Joi.number().positive().required(),
  name: Joi.string().trim().min(1).required(),
}).required();

const userIdSchema = Joi.object({
  userId: Joi.string()
    .trim()
    .min(1)
    .guid({
      version: ["uuidv4"],
    }),
}).required();

const usernameSchema = Joi.object({
  username: Joi.string()
    .trim()
    .min(3)
    .max(16)
    .regex(/^[a-z0-9._-]{3,16}$/)
    .message("username not valid")
    .required(),
}).required();

/**
 * Query Validators
 */
const validateUserQuery = async (req, res, next) => {
  try {
    await userSchema.validateAsync(req.body, { abortEarly: false });
    next();
  } catch (err) {
    next({
      httpStatus: 400,
      message: err.message,
    });
  }
};

const validateUserPutQuery = async (req, res, next) => {
  try {
    await userPutSchema.validateAsync(req.body, { abortEarly: false });
    next();
  } catch (err) {
    next({
      httpStatus: 400,
      message: err.message,
    });
  }
};

const validateUserIdParam = async (req, res, next) => {
  try {
    await userIdSchema.validateAsync(req.params, { abortEarly: false });
    next();
  } catch (err) {
    next({
      httpStatus: 400,
      message: err.message,
    });
  }
};

const validateUsernameSearch = async (req, res, next) => {
  try {
    await usernameSchema.validateAsync(req.query, { abortEarly: false });
    next();
  } catch (err) {
    next({
      httpStatus: 400,
      message: err.message,
    });
  }
};

module.exports = {
  validateUserQuery,
  validateUserIdParam,
  validateUserPutQuery,
  validateUsernameSearch,
};
