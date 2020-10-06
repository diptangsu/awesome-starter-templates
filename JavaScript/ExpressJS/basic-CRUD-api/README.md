# basic-CRUD-api with ExpressJS

## Pre-requisites:

- Install [Node.js](https://nodejs.org/en/)
- Install [Yarn Package Manager](https://yarnpkg.com/getting-started)
- This project uses something called as **fakeDB**, which is a JSON file acting as a noSQL database, this is to ensure user data is not lost even after closing the application. The **`fakeDB`** is initialized with `[]` in `fakeDB.json`.
- Create a file named `.env` in root directory with the following data in it:

```bash
PORT = 8080
```

**To execute the application**

```bash
// To install dependencies
yarn

// To start the application
yarn start
```

**Then, the API is available at http://localhost:8080/**

# API Specifications:

## basic-CRUD-api

| Method | Url                    | Request Body/Params/Qusery                                                                                                       | Description                      | Response                                     | Error                                                           |
| ------ | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------------------------------- | --------------------------------------------------------------- |
| GET    | `/`                    | `none`                                                                                                                           | Return **`{status: "Running"}`** | 200(OK), `{status: "Running"}`               | 500(Internal Server Error)                                      |
| GET    | `/api/users`           | `none`                                                                                                                           | Return a list of all users       | 200(OK), `{users: <User Object>[]}`          | 500(Internal Server Error)                                      |
| POST   | `/api/users`           | Body: `{username: <required, string>, age: <required, number>, name: <required, string>}`                                        | Add a new user                   | 201(Created), `{message: "User created."}`   | 400(Bad Request) / 500 (Internal Server Error)                  |
| GET    | `/api/users/{user-id}` | Params: `user-id : <required, string>`                                                                                           | Return user with id=user-id      | 200(OK), `{user: <User Object>}`             | 400(Bad Request) / 404(Not Found) / 500 (Internal Server Error) |
| PUT    | `/api/users/{user-id}` | Params: `user-id : <required, string>` Body: `{username: <optional, string>, age: <optional, number>, name: <optional, string>}` | Update user with id=user-id      | 200(OK), `{message: "UserID <ID> updated."}` | 400(Bad Request) / 404(Not Found) / 500 (Internal Server Error) |
| DELETE | `/api/users/{user-id}` | Params: `user-id : <required, string>`                                                                                           | Delete user with id=user-id      | 200(OK), `{message: "User deleted."}`        | 400(Bad Request) / 404(Not Found) / 500 (Internal Server Error) |
| GET    | `/api/users/search`    | Query: `username : <string, required>`                                                                                           | Search users by username         | 200(OK), `{user: <User Object>}`             | 400(Bad Request) / 404(Not Found) / 500 (Internal Server Error) |
