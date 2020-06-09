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
Method | Url | Description
--- | --- | ---
GET | `/` |
GET | `/hello` |


#### basic-CRUD-app
Method | Url | Description
--- | --- | ---
GET | `/` |
GET | `/users` | 
POST | `/users` | 
GET | `/users/{user-id}` | 
PUT | `/users/{user-id}` | 
DELETE | `/users/{user-id}` | 
GET | `/users/search`  | Search by username


#### basic-CRUD-api
Method | Url | Description
--- | --- | ---
GET | `/` |
GET | `/api/users` |
POST | `/api/users` |
GET | `/api/users/{user-id}` |
PUT | `/api/users/{user-id}` |
DELETE | `/api/users/{user-id}` |
GET | `/api/users/search` | Search by username


#### User model for the API and basic-CRUD-app
Column | Type | Constraints
--- | --- | ---
id | int | autoincrement primary key
username | text | unique
age | integer |
name | text |


## Contributing
To start contributing, check out [CONTRIBUTING.md](https://github.com/diptangsu/awesome-starter-templates/blob/master/CONTRIBUTING.md). New contributors are always welcome to support this project.

