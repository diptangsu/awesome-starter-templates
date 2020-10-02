# Symfony

# Folder structure
```
.
├── src
├────── Command
├────────── HelloWorldCommand.php
├─────────────────── UserController.php
├── README.md
└── .env
```

# Setup
Make sure you have `composer and php` installed in your machine before you continue.

## Install dependencie in symfony. 
```
composer install
```

## Running the Applcation
Run `php bin/console app:hello-world` to run the command
Or Run `php bin/console app:hello-world your-name` to run the command with a bit of extra