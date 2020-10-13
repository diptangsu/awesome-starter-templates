# Laravel (Basic Crud App)

# Folder structure
```
.
├── app
|	└── Http
|		└── Controller
|			└── UserController.php
├── routes
|	└── web.php
├── database
|	└── migrations
|		└── user_table.php
├── README.md
└── .env
```

# Setup
Make sure you have `composer and xampp/wamp` installed in your machine before you continue.

## Install dependencie in laravel. 
```
composer install
```

## Change your database
### Open .env file and change you database name
```
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=awesome
DB_USERNAME=root
DB_PASSWORD=

```

## Run `php artisan migrate`, to update your database, and to fill your database with dummy data run `php artisan db:seed`. 

## Running the Applcation
Run `php artisan serve` to start the app server.  


## Viewing the application in a web browser
Open up a web browser and navigate to
```
http://127.0.0.1:8000/
```
#### basic-CRUD-app
Method | Url | Description | Response | Error
--- | --- | --- | --- | ---
GET | `/` | Display **index** or<br>**website running** | 200 (Ok) |
GET | `/users` | Display a list of all users | 200 (Ok) |
POST | `/users` |  Add a user | 201 (Created) |
GET | `/users/{user-id}` | Update details of user<br>with id=user-id | 200 (Ok) or<br>204 (No Content) | 404 (Not found)
DELETE | `/users/delete/{user-id}` | Delete user<br>with id=user-id | 200 (Ok) | 404 (Not Found)
GET | `/users/search`  | Search users by username | 200 (Ok) |


#### User model for the API
Column | Type | Constraints
--- | --- | ---
id | int | autoincrement primary key
username | text | unique
age | integer |
name | text |
email | email |

