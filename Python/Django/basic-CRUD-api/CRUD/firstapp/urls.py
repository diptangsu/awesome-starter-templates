from django.urls import path,include,re_path
from . import views 

urlpatterns = [
path('',views.check,name="check"),
path('api/users/',views.UserAPIView.as_view(),name="userfunctions"),
path('api/users/<int:userid>',views.UserAPIView.as_view(),name="getallusers"),
path('api/users/<str:userid>',views.UserAPIView.as_view(),name="getuserbyusername"),

 

]