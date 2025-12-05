from django.db import models

# Create your models here.

DENDER_CHOICES = [
    ('Male', 'Male'),
    ('Female', 'Female'),
  
]

COURSE_CHOICES = [
    ('Mathematics', 'Mathematics'),
    ('Science', 'Science'),
    ('History', 'History'),
    ('Art', 'Art'),
    ('Physical Education', 'Physical Education'),
]

YEAR_OF_STUDY_CHOICES = [
    (1, '1st Year'),
    (2, '2nd Year'),
    (3, '3rd Year'),
    (4, '4th Year'),
    (5, '5th Year'),
]


class Students(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.EmailField(unique=True)
    phone_number=models.CharField(max_length=15)
    date_of_birth = models.DateField()
    gender =models.CharField(max_length=10, choices=DENDER_CHOICES)
    address = models.TextField()
    course =models.CharField(max_length=50, choices=COURSE_CHOICES)
    year_of_study = models.IntegerField(choices=YEAR_OF_STUDY_CHOICES)
    enrollment_date = models.DateField(auto_now_add=True)
    guardian_name = models.CharField(max_length=60)
    guardian_contact = models.CharField(max_length=15)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"