# .Net Core
.Net Core implementation of basic-CRUD-app using React.JS and EF Core In-Memory database.
The project is similar structure to that of basic-CRUD-api implementation. Consumes same infrastructure for backend work.
## Folder structure
```
.
basic-CRUD-app
├── basic-CRUD-app
│	├── ClientApp
│	│	├── public
│	│	└── src [Front-end]
│	├── Controllers
│	├── Models
│	└── Services
├── README.md
└── basic-CRUD-app.sln (C# Solution)

```

### **Prerequisites**
  - [Visual Studio code](https://code.visualstudio.com/download) 1.18 or higher
  - [.Net core SDK](https://www.microsoft.com/net/download/windows) 3.1 or higher

### **Setup & Running the node**

  - To build the application, go to the root directory[basic-CRUD-app] and execute the following command.
  ```
	dotnet build 
  ```
  - To run the application, please build the application and then execute the following command
  ```
	dotnet run --project .\basic-CRUD-app
  ```
  *Execute the commands in the root directory.[basic-CRUD-app]

## Viewing the application in a web browser
Open up a web browser and navigate to
```
http://localhost:5000
```
Or, click [here](http://localhost:5000) to do the same.

## URLs/Endpoints of each project

#### basic-CRUD-app
Method | Url | Description | Response | Error
--- | --- | --- | --- | ---
GET | `/` | Display **index** or<br>**website running** | 200 (Ok) |
GET | `/users` | Display a list of all users | 200 (Ok) |
POST | `/users` |  Add a user | 201 (Created) |
GET | `/users/{user-id}` | Display details of user<br>with id=user-id | 200 | 404 (Not Found)
PUT | `/users/{user-id}` | Update details of user<br>with id=user-id | 200 (Ok) or<br>204 (No Content) | 404 (Not found)
DELETE | `/users/{user-id}` | Delete user<br>with id=user-id | 200 (Ok) | 404 (Not Found)
GET | `/users/search`  | Search users by username | 200 (Ok) |

#### User model for the API and basic-CRUD-app
Column | Type | Constraints
--- | --- | ---
id | int | autoincrement primary key
username | text | unique
age | integer |
name | text |

