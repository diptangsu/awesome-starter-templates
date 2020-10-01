GET	/	Return {status: "Running"}		
GET	/api/users	Return a list of all users		
POST	/api/users	Add a new user		
GET	/api/users/{user-id}	Return user with id=user-id		
PUT	/api/users/{user-id}	Update user with id=user-id		
DELETE	/api/users/{user-id}	Delete user with id=user-id		
GET	/api/users/search	Search users by username

# Laravel

# Folder structure
```
.
├── app.py
├── README.md
└── requirements.txt
```

# Setup
Make sure you have `composer and xampp/wamp` installed in your machine before you continue.

## Install dependencie in laravel. 
```
composer update
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
http://127.0.0.1:8000/api
```
#### basic-CRUD-api
Method | Url | Description | Response | Error
--- | --- | --- | --- | ---
GET | `/` | Return **`{status: "Running"}`** | |
GET | `/api/users` | Return a list of all users | |
POST | `/api/users` | Add a new user | |
GET | `/api/users/{user-id}` | Return user with id=user-id | |
POST | `/api/users/{user-id}` | Update user with id=user-id | |
DELETE | `/api/users/{user-id}` | Delete user with id=user-id | |
GET | `/api/users/search/{username}` | Search users by username | |


#### User model for the API
Column | Type | Constraints
--- | --- | ---
id | int | autoincrement primary key
username | text | unique
age | integer |
name | text |
email | email |

