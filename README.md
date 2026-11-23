# 🎓 EduReach – Learning Management System (LMS)

**EduReach** is a web-based Learning Management System (LMS) designed to make digital education more accessible, organized, and efficient. It provides a common platform where students and teachers can interact, manage courses, share learning materials, submit assignments, and track academic progress.

The project aims to support **SDG 4 – Quality Education** by making learning resources more accessible through technology.

## 🚀 Key Features

- **User Authentication:** Secure login and registration system.
- **Google OAuth2 Login:** Sign in using Google authentication.
- **Role-Based Access:** Separate access for Students and Teachers.
- **Student Dashboard:** View enrolled courses and academic activities.
- **Teacher Dashboard:** Manage courses and learning activities.
- **Course Management:** Browse and access available courses.
- **Assignments:** Teachers can provide assignments and students can submit them.
- **Quizzes:** Support for online quizzes and assessments.
- **Results & Progress:** Track academic performance.
- **Learning Resources:** Access course materials and announcements.

## 🛠️ Tech Stack

### Frontend
- React.js
- JavaScript
- HTML5
- CSS3
- Tailwind CSS
- React Router

### Backend
- Java
- Spring Boot
- Spring Security
- Spring OAuth2
- REST APIs
- JDBC

### Database
- PostgreSQL

### Tools & Technologies
- Git & GitHub
- VS Code
- Postman
- Maven
- Docker

## 📂 Project Structure

```text
EduReach/
│
├── EduReach_Frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── EduReach_Backend/
│   ├── src/
│   │   └── main/
│   │       ├── java/
│   │       └── resources/
│   └── pom.xml
│
└── README.md
```

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd EduReach
```

### 2. Frontend Setup

```bash
cd EduReach_Frontend
npm install
npm run dev
```

The frontend will run at:

`http://localhost:5173`

### 3. Backend Setup

Navigate to the backend directory:

```bash
cd EduReach_Backend
```

Configure your PostgreSQL database and update the database credentials in the application configuration.

Run the Spring Boot application:

```bash
mvn spring-boot:run
```

### 4. Database Configuration

Create a PostgreSQL database named:

```sql
CREATE DATABASE edureach_db;
```

Configure your database URL, username, and password in the backend application configuration.

## 🎯 Project Objectives

- Promote accessible and quality education.
- Simplify communication between students and teachers.
- Provide a centralized platform for learning resources.
- Improve assignment and assessment management.
- Encourage digital learning and academic collaboration.

## 🔮 Future Scope

- AI-powered personalized learning recommendations.
- AI-based doubt-solving assistant.
- Live classes and video lectures.
- Attendance management.
- Advanced performance analytics.
- Notifications and real-time communication.

## 👨‍💻 Team Members

| Name | Role |
|---|---|
| Anurag Kumar | Backend Development |
| Anuj Gupta | Frontend Development |
| Anubhav Mishra | Database Management |

## 🌍 Sustainable Development Goal

**SDG 4 – Quality Education**

EduReach supports the United Nations Sustainable Development Goal 4 by promoting inclusive and equitable quality education and providing opportunities for accessible digital learning.

---

⭐ **EduReach – Making Quality Education Accessible to Everyone.**
