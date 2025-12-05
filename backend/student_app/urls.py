from django.urls import path
from . import views
from .views import StudentViewList

urlpatterns = [
    path('', StudentViewList.as_view(), name='student-list'),
    path('<int:pk>/', views.StudentDetailView.as_view(), name='student-detail'),
    path('search/', views.StudentSearchView.as_view(), name='student-search'),  
]
