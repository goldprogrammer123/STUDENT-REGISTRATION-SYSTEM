from rest_framework import serializers
from .models import Students

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Students
        fields = '__all__'

class StudentDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Students
        fields = "__all__"
        
        
        

class StudentSearchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Students
        fields = "__all__"