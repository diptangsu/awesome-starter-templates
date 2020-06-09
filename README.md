# awesome-starter-templates
A curated list of starter templates for popular web frameworks.

The idea of this repository is to allow newcommers to a particular web framework to have a look at what a sample project in that framework might look like, what the best practices are, and how code should be structured in that framework for it's corresponding language.


## Folder structure of the repository
```
.
├── <Language-1>
│   ├── <Framework-1>
│   │   ├── basic-CRUD-api
│   │   │   └── README.md
│   │   ├── basic-CRUD-app
│   │   │   └── README.md
│   │   └── hello-world-app
│   │       └── README.md
│   ├── <Framework-2>
│   │   └── ...
│   └── README.md
└── README.md

```
The `README.md` files inside each application directory must have detailed steps to set-up and run the application

## URLs/Endpoints of each project

#### hello-world-app
Method | Url | Description | Response | Error
---:| --- | --- | --- | ---
GET | `/hello` | Display **Hello World** | 200 | 


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


## Contributing
To start contributing, check out [CONTRIBUTING.md](https://github.com/diptangsu/awesome-starter-templates/blob/master/CONTRIBUTING.md). New contributors are always welcome to support this project.

