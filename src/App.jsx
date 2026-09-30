import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Help from "./pages/Help";
import Login from "./pages/Login";
import Register from "./pages/Register";

import StudentLayout from "./components/StudentLayout";
import Dashboard from "./pages/Student/Dashboard";
import Courses from "./pages/Student/Courses";
import Assignments from "./pages/Student/Assignments";
import Quizzes from "./pages/Student/Quizzes";
import Results from "./pages/Student/Results";

import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* PUBLIC WEBSITE */}

        <Route
          path="/"
          element={
            <>
              <Navbar />
              <main className="min-h-screen">
                <Home />
              </main>
              <Footer />
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <main className="min-h-screen">
                <About />
              </main>
              <Footer />
            </>
          }
        />

        <Route
          path="/help"
          element={
            <>
              <Navbar />
              <main className="min-h-screen">
                <Help />
              </main>
              <Footer />
            </>
          }
        />

        <Route
          path="/login"
          element={
            <>
              <Navbar />
              <main className="min-h-screen">
                <Login />
              </main>
              <Footer />
            </>
          }
        />

        <Route
          path="/register"
          element={
            <>
              <Navbar />
              <main className="min-h-screen">
                <Register />
              </main>
              <Footer />
            </>
          }
        />


        {/* STUDENT APPLICATION */}

        <Route path="/student" element={<StudentLayout />}>

          <Route
            path="dashboard"
            element={<Dashboard />}
          />

          <Route
            path="courses"
            element={<Courses />}
          />

          <Route
            path="assignments"
            element={<Assignments />}
          />

          <Route
            path="quizzes"
            element={<Quizzes />}
          />

          <Route
            path="results"
            element={<Results />}
          />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;