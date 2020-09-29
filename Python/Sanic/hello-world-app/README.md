# Sanic

# Important

Sanic requires at least version **3.6** of Python, because it uses the new `async`/`await` syntax. Older versions won't work.

# Folder structure
```
.
├── README.md
├── hello_world
│   └── server.py
└── requirements.txt
```

# Setup
Make sure you have at least Python 3.6 installed on your machine before you continue. For windows users, the path to `python3` must be added to the system environment variable `PATH`. 

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
You can install the requirements for this project from the [requirements.txt](/Python/Sanic/hello-world-app/requirements.txt) file by using the command  
```
(venv) ...$ pip install -r requirements.txt
```
Since you're inside a virtualenv, the requirements will be installed inside it, keeping the project requirements specific to the project.

## Running the Applcation
Run the [server.py](/Python/Sanic/hello-world-app/hello_world/server.py) file to start the app server.  
```
(venv) ...$ python hello_world/server.py

[2020-09-29 18:49:30 +0200] [77059] [INFO] Goin' Fast @ http://0.0.0.0:8000
[2020-09-29 18:49:30 +0200] [77059] [INFO] Starting worker [77059]
```

Or you can use the Sanic command-line utility to run your modules:
```
(venv) ...$ sanic hello_world.server.app

[2020-09-29 18:52:45 +0200] [77088] [INFO] Goin' Fast @ http://127.0.0.1:8000
[2020-09-29 18:52:45 +0200] [77088] [INFO] Starting worker [77088]
```

## Viewing the application in a web browser
Open up a web browser and navigate to
```
http://127.0.0.1:8000/hello
```
Or, click [here](http://127.0.0.1:8000/hello) to do the same.

