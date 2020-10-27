# Symfony

# Folder structure
```
.
├── src
├────── Controller
├────────── DefaultController.php
├── templates
├────── default
├────────── index.html.twig
├────────── named.html.twig
├────── base.html.twig
├── README.md
└── .env
```

# Setup
Make sure you have `composer, php and symfony cli` installed in your machine before you continue.

## Install dependencies in symfony. 
```
composer install
```

## Running the Applcation
Run `symfony serve` to run the integrated webserver
Point your web browser to https://localhost:8000/ to view the basic Hello-World page
Or point your web browser to https://localhost:8000/yourname to get a personalized hello world message