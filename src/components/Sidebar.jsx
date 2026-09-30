import { NavLink } from "react-router-dom";

function Sidebar() {
  const linkStyle = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
      isActive
        ? "bg-blue-50 text-blue-600 font-semibold"
        : "text-gray-600 hover:bg-gray-100"
    }`;

  return (
    <aside className="w-64 min-h-screen bg-white border-r px-4 py-6">

      <div className="px-4 mb-8">
        <h2 className="text-xl font-bold text-blue-600">
          EduReach
        </h2>
        <p className="text-xs text-gray-400 mt-1">
          Student Portal
        </p>
      </div>

      <nav className="space-y-2">

        <NavLink
          to="/student/dashboard"
          end
          className={linkStyle}
        >
          🏠
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/student/courses"
          className={linkStyle}
        >
          📚
          <span>My Courses</span>
        </NavLink>

        <NavLink
          to="/student/assignments"
          className={linkStyle}
        >
          📝
          <span>Assignments</span>
        </NavLink>

        <NavLink
          to="/student/quizzes"
          className={linkStyle}
        >
          🎯
          <span>Quizzes</span>
        </NavLink>

        <NavLink
          to="/student/results"
          className={linkStyle}
        >
          📊
          <span>Results</span>
        </NavLink>

      </nav>

    </aside>
  );
}

export default Sidebar;