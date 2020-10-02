#CRUD API USING DJANGO


##What is a C-R-U-D API?

C-R-U-D means Create - Read - Update - Delete.
This terms are used for Creating, Reading, Updating & Deleting from a database using an API.
User sends a HTTP Request to API and as per our request API does that operation on database.

![Image Credit Google](https://lh3.googleusercontent.com/proxy/kjQSoPFMIf-8iKhEc4hhJqYGqbpxvTDJPuw0pc6na0c8vTeBexf88PRwteXaV5nqPh06zQYbdLRlIRar5ldbjo4KO5yjRhfsN7m9yU3jynzk599znY3htUH0yn_OCQoQ0ZnvFBmNtKHkareFzCLfxJuPNhXzpn0sGk1SGQ)

##Let's Start to build a CRUD API using Django

Create a Django Project at desired location using this command (Make Sure Django is Installed)

```bash
django-admin startproject name-of-your-project
cd name-of-your-project
```

After, Successfully Creating a Django Project cd into that directory and create a Django App

```bash
python manage.py startapp name-of-your-app
```

##Let's Start Coding

Open your favourite code-editor and start writing code.

Our Whole CRUD API is based on Database.
So we will start by creating models for CRUD API.

But give me a second to explain our API.

We will create an API for Book Store.
Create or POST Request will create a book,
Update or PUT Request will update a book's information,
Read or GET Request will read a book's info and return it,
Delete or DELETE Request will delete a book.

We will above mentioned terms POST, PUT, GET, DELETE.

Open models.py

```python
class Book(models.Model):
	book_name = models.CharField(max_length=200)
	book_price = models.IntegerField()
	unique_code = models.CharField(max_length=200)
	published_date = models.DateField(auto_now_add=True)

	def __str__(self):
		return f"{self.book_name} created"
```

This class creates a db Book with book_name (Character Field), book_price (Integer Field), published_date (Date Field) as columns, Unique Code to identify Books.

__str__ function returns a string after any new book is created


Create a forms.py file in our app and open it

```python
from django import forms


class CreateForm(forms.Form):
	book_name = forms.CharField(label="Book Name")
	unique_code = forms.CharField(label="Unique Code")
	book_price = forms.IntegerField(label="Book Price")
```

We will need to import form from django package. This file is used to create Schema for HTML forms and it help to easily communicate the form using python.

Create a Class "CreateForm" which will inherit from Form class. book_name is a Input Field (TEXT) and book_price is a Input Field (NUMBER).




Open views.py

Views.py is from where we will access our database

```python
from django.shortcuts import render

from .models import Book
from .forms import CreateForm


def index(request):
	if request.method == "POST":
		form = CreateForm(request.POST)
		if form.is_valid():
			book_name = form.cleaned_data["book_name"]
			book_price = form.cleaned_data["book_price"]
			new_book = Book(book_name=book_name, book_price=book_price)
			new_book.save()
	else:
		form = CreateForm()

	context = {
		"form": form
	}
	return render(request, "index.html", context)
# Create your views here.
```

Let me Explain this Block of Code

We import _render_ function to render HTML files
then import our DB Schema from .models and Form from .forms

Create a function _index_, this function will be used for home page and for POST method.

Then we intialize our form and check if input data is valid and then take book_name and book_price and the using new_book variable we create an instance of our Book and save it to our DB.

Just Change urls.py of app to 

```python
from django.urls import path

from . import views

app_name = "store"

urlpatterns = [
	path('', views.index, name="index")
]
```

and projects urls.py to 

```python
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include("store.urls"))
]
```

add our app to settings.py 

```python
INSTALLED_APPS = [
    'store',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]
```

IF no POST request is made then we simply render out our original form

###Let's Create GET, PUT, DELETE REQUEST

###GET Request

Import _JsonResponse_ from _django.http_
and create a get() function 

```python
def get(request):
	data = Book.objects.all().values()
	
	return JsonResponse({"data":list(data)})
```


###PUT Request

```python
def put(request):
	if request.method == "PUT":
		form = UpdateForm(request.PUT)
		if form.is_valid():
			unqiue_id = form.cleaned_data["unique_code"]
			originalBookName = form.cleaned_data["original_book_name"]
			bookName = form.cleaned_data["book_name"]
			bookPrice = form.cleaned_data["book_price"]
			try:
				book_data = Book.objects.get(book_name=originalBookName)

				book_data.book_name = bookName
				book_data.book_price = bookPrice
				book_data.save()
			except:
				return HttpResponse("Sorry")
	else:
		form = UpdateForm()

	context = {
		"form": form
	}
	return render(request, "put.html", context)
```

This Code Works just like POST Request but only it is finding the concerned book and updating it with recent given information

Create a Update Form using

```python
class UpdateForm(forms.Form):
	original_book_name = forms.CharField(label="Original Book Name")
	book_name = forms.CharField(label="Book Name")
	unique_code = forms.CharField(label="Unique Code")
	book_price = forms.IntegerField(label="Book Price")
```

###Delete Request

```python
def delete(request):
	if request.method == "POST":
		form = DeleteForm(request.POST)
		if form.is_valid():
			bookName = form.cleaned_data["book_name"]
			book = Book.objects.get(book_name=bookName)
			book.delete()
	else:
		form = DeleteForm()

	context = {
		"form": form
	}
	return render(request, "delete.html", context)
```

It is also just like POST request but we get book's name and delete it using django's _delete()_ function.


Don't forget to make HTML Files and Update urls.py file.

Thanks.
Peace Out.



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

