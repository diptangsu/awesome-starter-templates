GET	/	Return {status: "Running"}		
GET	/api/users	Return a list of all users		
POST	/api/users	Add a new user		
GET	/api/users/{user-id}	Return user with id=user-id		
PUT	/api/users/{user-id}	Update user with id=user-id		
DELETE	/api/users/{user-id}	Delete user with id=user-id		
GET	/api/users/search	Search users by username

# Flask

# Folder structure
```
.
├── app.py
├── README.md
└── requirements.txt
```

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
You can install the requirements for this project from the [requirements.txt](/Python/Flask/hello-world-app/requirements.txt) file by using the command  
```
(venv) ...$ pip install -r requirements.txt
```
Since you're inside a virtualenv, the requirements will be installed inside it, keeping the project requirements specific to the project.

## Running the Applcation
Run the [app.py](/Python/Flask/hello-world-app/app.py) file to start the app server.  
```
(venv) ...$ python app.py

 * Serving Flask app "app" (lazy loading)
 * Environment: production
   WARNING: This is a development server. Do not use it in a production deployment.
   Use a production WSGI server instead.
 * Debug mode: on
 * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
 * Restarting with stat
 * Debugger is active!
 * Debugger PIN: 249-131-684
```
or
```
(venv) ...$ flask run

 * Environment: production
   WARNING: This is a development server. Do not use it in a production deployment.
   Use a production WSGI server instead.
 * Debug mode: off
 * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
```

## Viewing the application in a web browser
Open up a web browser and navigate to
```
http://127.0.0.1:5000/hello
```
Or, click [here](http://127.0.0.1:5000/hello) to do the same.

