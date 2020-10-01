# Django API using DjangoRestFramework

## Folder structure


```
.
├── CRUD
│   ├── CRUD
│   │   ├── asgi.py
│   │   ├── __init__.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   ├── firstapp
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── __init__.py
│   │   ├── migrations
│   │   │   └── __init__.py
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── tests.py
│   │   ├── urls.py
│   │   └── views.py
│   └── manage.py
├── README.md
└── requirements.txt


```



## Setup
To install all the required packages run the command 

```
pip3 install -r requirements.txt
```

Before starting the server make sure to do the migrations
```
python3 manage.py makemigrations
python3 manage.py migrate
```

Now to start the server run the command
```
python3 manage.py runserver
```





