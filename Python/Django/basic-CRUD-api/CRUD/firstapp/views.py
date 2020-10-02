from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import UserSerializer
from .models import UserDetails
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.core.exceptions import ObjectDoesNotExist
from rest_framework import status
# Create your views here.


@api_view(["GET"])
def check(request):
    return Response({'status':"Running"},status=status.HTTP_200_OK)


class UserAPIView(APIView):
    def get(self,request,userid=None):
        if userid is not None:
            try:
                if type(userid)==int:
                    ser=UserSerializer(UserDetails.objects.get(id=userid))
                else:
                    ser=UserSerializer(UserDetails.objects.get(username=userid))

            except ObjectDoesNotExist:
                return Response({'Error':'User with that ID does not exist'},status=status.HTTP_404_NOT_FOUND)

        else:
            
            ser=UserSerializer(UserDetails.objects.all(),many=True)
            

        return Response(ser.data)
    def post(self,request):
        ser=UserSerializer(data=request.data)
        if ser.is_valid():
            ser.save()
        
            return Response(request.data,status=status.HTTP_201_CREATED)
        else:
            return Response(ser.errors,status=status.HTTP_404_NOT_FOUND)

    def put(self,request,userid):
        final={}
        
        user=UserDetails.objects.get(id=userid)
        if request.data.get("username",None):
            final["username"]="Username Update"
        if request.data.get("age",None):
            final["age"]="Age updated"
        if request.data.get("name",None):
            final["name"]="Name updated"
        user.username=request.data.get("username",None) or user.username
        user.age=request.data.get("age",None) or user.age
        user.name=request.data.get("name",None) or user.name
        # print(user.clean_fields())
        ser=UserSerializer(data=user.__dict__)
        if ser.is_valid():
            
            user.save()
            return Response(final,status=status.HTTP_200_OK)
        else:
            print(ser.errors)
            return Response(ser.errors,status=status.HTTP_400_BAD_REQUEST)
        
        

    def delete(self,request,userid):
        try:
            UserDetails.objects.get(id=userid).delete()
            return Response({"Success":"Deleted"},status=status.HTTP_200_OK)
            
        except ObjectDoesNotExist:
                return Response({'Error':'User with that ID does not exist'},status=status.HTTP_404_NOT_FOUND)
        
        


