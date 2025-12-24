from django.urls import path
from . import views
from .views import StudentViewList

urlpatterns = [
    path('', StudentViewList.as_view(), name='student-list'),
    path('<int:pk>/', views.StudentDetailView.as_view(), name='student-detail'),
    path('search/', views.StudentSearchView.as_view(), name='student-search'),  
    path('count-female/', views.CountFemaleStudentsView.as_view(), name='count-female-students'),
    path('count-male/', views.CountMaleStudentsView.as_view(), name='count-male-students'),
    path('count/', views.CountStudentsView.as_view(), name='count-students'),
    
    path('profile-create/', views.StudentProfileCreateView.as_view(), name='students-profile'),
    path('profile-detail/<int:pk>/', views.StudentProfileDetailView.as_view(), name='students-profile-info'),
    
]
