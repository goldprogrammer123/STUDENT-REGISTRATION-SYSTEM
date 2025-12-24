from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from .serializers import CountFemaleStudentsSerializer, CountMaleStudentsSerializer, CountStudentsSerializer, StudentDetailSerializer, StudentSerializer,ProfileCreateSerializer,ProfileDetailSerializer
from .models import Students,StudentProfile

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
    
    
    
class CountFemaleStudentsView(generics.GenericAPIView):
    serializer_class = CountFemaleStudentsSerializer

    def get(self, request, *args, **kwargs):
        count = Students.objects.filter(gender='Female').count()
        return HttpResponse(count)  
    
    
class CountMaleStudentsView(generics.GenericAPIView):
    serializer_class = CountMaleStudentsSerializer

    def get(self, request, *args, **kwargs):
        count = Students.objects.filter(gender='Male').count()
        return HttpResponse(count)
    
    
    
class CountStudentsView(generics.GenericAPIView):
    serializer_class = CountStudentsSerializer

    def get(self, request, *args, **kwargs):
        count = Students.objects.count()
        return HttpResponse(count)              
    
    
    
class StudentProfileCreateView(generics.ListCreateAPIView):
    queryset = StudentProfile.objects.all()
    serializer_class =ProfileCreateSerializer
    
    
    
class StudentProfileDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = StudentProfile.objects.all()
    serializer_class =ProfileDetailSerializer
    # def get_queryset(self):
    #     student_id=self.kwargs['pk']
    #     student=Students.objects.get(pk=student_id)
    #     return StudentProfile.objects.filter(student=student)
    