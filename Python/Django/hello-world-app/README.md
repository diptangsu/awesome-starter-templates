# Flask

# Folder structure
```
.
├── hello_world
│   ├── greetings
│   │   ├── __init__.py
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── migrations
│   │   │   └── __init__.py
│   │   ├── models.py
│   │   ├── tests.py
│   │   ├── urls.py
│   │   └── views.py
│   ├── hello_world
│   │   ├── __init__.py
│   │   ├── asgi.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   └── manage.py
├── README.md
└── requirements.txt
```

 * The outer `hello_world/` folder is only a container for the project, you can change its name. 
 * The inner `hello_world/` folder is the actual Python package for your project. 
 * The `greetings/` folder is the Python package containing the `greetings` application that has its root mapped to the `/hello` URL.
 * `manage.py` is a command-line utility that helps you to interact with the project.

# Setup
Make sure you have `python3` installed in your machine before you continue. For windows users, the path to `python3` must be added to the system environment variable `PATH`. 

## Install virtualenv in python. 
```
pip3 install virtualenv
```

## Create a virtual environment
### Linux
```bash
$ virtualenv -p python3 venv
```
This will create a virtual environment named `venv` with `python3` as its interpreter.

## Windows
If you have multiple versions of python installed and added to `PATH`, find out the path for `python3`.  
```cmd
> where python
C:\Python27\python.exe
C:\Users\deepd\AppData\Local\Programs\Python\Python37-32\python.exe
C:\Users\deepd\AppData\Local\Programs\Python\Python36\python.exe
```
You will get an output of all the python execuables that are added to `PATH`. For example I have `python2.7`, `python3.6` and `python3.7` installed.

In this command, the path to `python3.6` is being used to create the virtual environment.
```cmd
> virtualenv -p C:\Users\deepd\AppData\Local\Programs\Python\Python36\python.exe venv
```

## Activating the virtualenv
### Linux
```bash
$ source venv/bin/activate
(venv) ...$ 
```
### Windows
```cmd
> venv\Scripts\activate
(venv) ...> 
```

## Installing requirements
You can install the requirements for this project from the [requirements.txt](/Python/Django/hello-world-app/requirements.txt) file by using the command  
```
(venv) ...$ pip install -r requirements.txt
```
Since you're inside a virtualenv, the requirements will be installed inside it, keeping the project requirements specific to the project.

## Running the Applcation
Django comes with a lightweight development server. You can run it with the following command: `python manage.py runserver`
```
Watching for file changes with StatReloader
Performing system checks...

System check identified no issues (0 silenced).
September 29, 2020 - 16:12:25
Django version 3.1, using settings 'hello_world.settings'
Starting development server at http://127.0.0.1:8000/
Quit the server with CONTROL-C.
```

**Important:** This is a development serever, it's goal is only to speed up the development. Please use a production web server for your production environment.

## Viewing the application in a web browser
Open up a web browser and navigate to
```
http://127.0.0.1:8000/hello
```
Or, click [here](http://127.0.0.1:8000/hello) to do the same.

