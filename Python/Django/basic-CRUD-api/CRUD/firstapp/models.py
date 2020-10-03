from django.db import models

# Create your models here.


class UserDetails(models.Model):
    username=models.TextField(unique=True)
    age=models.IntegerField()
    name=models.TextField()
    