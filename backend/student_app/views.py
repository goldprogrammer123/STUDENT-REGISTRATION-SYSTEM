from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from .serializers import StudentDetailSerializer, StudentSerializer
from .models import Students

# Create your views here.

class StudentViewList(generics.ListCreateAPIView):
    queryset = Students.objects.all()
    serializer_class = StudentSerializer
    
    

class StudentDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Students.objects.all()
    serializer_class = StudentDetailSerializer
    
    
    
    
class StudentSearchView(generics.ListAPIView):
    serializer_class = StudentDetailSerializer

    def get_queryset(self):
        first_name = self.request.query_params.get('first_name')
        last_name = self.request.query_params.get('last_name')
        email = self.request.query_params.get('email')
        course = self.request.query_params.get('course')

        qs = Students.objects.all()

        if first_name:
            qs = qs.filter(first_name__icontains=first_name)
        if last_name:
            qs = qs.filter(last_name__icontains=last_name)
        if email:
            qs = qs.filter(email__icontains=email)
        if course:
            qs = qs.filter(course__icontains=course)

        return qs