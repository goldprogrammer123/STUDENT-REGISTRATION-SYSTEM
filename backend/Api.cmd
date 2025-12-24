

GET all students:       http://127.0.0.1:8000/students/

GET  students detail:   http://127.0.0.1:8000/students/<int:pk>

QUERY(first_name,last_name, email,course ) search students: http://127.0.0.1:8000/students/search/?first_name20=afidhu

COUNT(GET) all students:    http://127.0.0.1:8000/students/count/

COUNT(GET) female students:    http://127.0.0.1:8000/students/count-female/

COUNT(GET) male students:   http://127.0.0.1:8000/students/count-male/

CREATE(POST)  students profile: http://127.0.0.1:8000/students/profile-create/

GET students profile detail:    http://127.0.0.1:8000/students/profile-detail/<int:pk>/


