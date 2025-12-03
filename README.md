📘 Student Management System

The Student Management System is a simple digital platform designed to help institutions manage student records efficiently. It allows admins to register new students, update their information, track enrollment, and generate reports. The system provides a clean, modern user interface and simplifies daily academic administration tasks through an organized dashboard and easy-to-use forms.

🚀 Project Features
1. Landing Page

Introduction to the system

Navigation links to login and register

Clean UI for first-time users

2. Login Page

Secure login for administrators

Email + password authentication

Error handling and validation

3. Registration Page

Admin account creation

Form validation

Stores user credentials securely

4. Dashboard Page

Overview of system statistics

Quick access to important modules

Admin profile & actions

5. Register Student Page

Form for adding new student details

Upload documents/photos (optional)

Saves data to the backend API

6. View Student List Page

Table of all registered students

Search, filter or sort (future feature)

Edit & delete student records

7. Report Page

Generate simple student reports

Summary statistics

Printable/downloadable options

🛠 Technologies Used
Frontend

React + Vite

JavaScript (ES6+)

CSS

Axios (for API calls)

Backend

Django

Django REST Framework (DRF)

SQLite/PostgreSQL (optional)

📁 Project Structure
STUDENT-REGISTRATION-SYSTEM/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   │   ├── LandingPage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   ├── RegisterPage.jsx
│   │   │   ├── DashboardPage.jsx
│   │   │   ├── RegisterStudent.jsx
│   │   │   ├── StudentList.jsx
│   │   │   ├── ReportPage.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   ├── package.json
│   ├── vite.config.js
│
├── backend/
│   ├── manage.py
│   ├── requirements.txt
│   ├── registrationsystem/
│   ├── students/
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── views.py
│   │   ├── urls.py
│
├── database/
│   └── (placeholder .gitkeep)
│
└── README.md

🧩 Setup Instructions (After Cloning the Repo)
🔹 1. Clone the Repository
git clone https://github.com/yourname/STUDENT-REGISTRATION-SYSTEM.git
cd STUDENT-REGISTRATION-SYSTEM

🔹 2. Setup Frontend (React + Vite)
cd frontend
npm install
npm run dev

🔹 3. Setup Backend (Django + DRF)
Create virtual environment
cd backend
python3 -m venv venv
source venv/bin/activate

Install dependencies
pip install -r requirements.txt

Run backend server
python manage.py migrate
python manage.py runserver

🤝 Collaboration Rules (Git Workflow)

To avoid conflicts and maintain clean development:

1️⃣ Always pull before starting work
git pull origin dev

2️⃣ Create or switch to your feature branch
git checkout -b feature-name

3️⃣ After making changes, pull again to avoid conflicts
git pull origin dev

4️⃣ Commit your work
git add .
git commit -m "Your message"

5️⃣ Push your feature branch
git push origin feature-name

6️⃣ Create a Pull Request → target dev branch
7️⃣ No one should push directly to main

main is for final releases only.
