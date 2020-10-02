# .Net Core
.Net Core implementation of basic-CRUD-api using EF Core In-Memory database.

## Folder structure
```
.
basic-CRUD-api
├── basic-CRUD-api
│	├── Controllers
│	├── Models
│	└── Services
├── basic-CRUD-api-tests
├── README.md
└── basic-CRUD-api.sln (C# Solution)

```

### **Prerequisites**
  - [Visual Studio code](https://code.visualstudio.com/download) 1.18 or higher
  - [.Net core SDK](https://www.microsoft.com/net/download/windows) 3.1 or higher

### **Setup & Running the node**

  - To build the application, go to the root directory[basic-CRUD-api] and execute the following command.
  ```
	dotnet build 
  ```
  - To run the application, please build the application and then execute the following command
  ```
	dotnet run --project .\basic-CRUD-api
  ```
  - To run the test for the application, execute the following command
  ```
	dotnet test
  ```
  *Execute the commands in the root directory.[basic-CRUD-api]

## Viewing the application in a web browser
Open up a web browser and navigate to
```
http://localhost:5000
```
Or, click [here](http://localhost:5000) to do the same.

## URLs/Endpoints of each project

#### basic-CRUD-api
Method | Url | Description | Response | Error
--- | --- | --- | --- | ---
GET | `/` | Return **`{status: "Running"}`** | |
GET | `/api/users` | Return a list of all users | |
POST | `/api/users` | Add a new user | |
GET | `/api/users/{user-id}` | Return user with id=user-id | |
PUT | `/api/users/{user-id}` | Update user with id=user-id | |
DELETE | `/api/users/{user-id}` | Delete user with id=user-id | |
GET | `/api/users/search` | Search users by username | |


#### User model for the API and basic-CRUD-app
Column | Type | Constraints
--- | --- | ---
id | int | autoincrement primary key
username | text | unique
age | integer |
name | text |

