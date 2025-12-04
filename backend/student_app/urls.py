from django.urls import path
from . import views

urlpatterns = [
    path('', views.StudentList.as_view(), name='student-list'),
    path('<int:pk>/', views.StudentDetail.as_view(), name='student-detail'),
]