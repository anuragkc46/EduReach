import { NavLink } from "react-router-dom";

function Navbar() {
  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-indigo-600 font-semibold"
      : "text-slate-600 hover:text-indigo-600";

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

        {/* ================= LOGO ================= */}
        <NavLink to="/" className="group flex items-center gap-2">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 text-lg font-bold text-white shadow-md shadow-indigo-200 transition group-hover:scale-105">
            E
          </div>

          <div>
            <span className="text-2xl font-bold tracking-tight text-slate-900">
              Edu
            </span>

            <span className="text-2xl font-bold tracking-tight text-indigo-600">
              Reach
            </span>
          </div>

        </NavLink>


        {/* ================= DESKTOP NAVIGATION ================= */}
        <div className="hidden items-center gap-8 md:flex">

          <NavLink
            to="/"
            className={navLinkStyle}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={navLinkStyle}
          >
            About
          </NavLink>

          <NavLink
            to="/help"
            className={navLinkStyle}
          >
            Help
          </NavLink>

          <NavLink
            to="/login"
            className={navLinkStyle}
          >
            Login
          </NavLink>

          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive
                ? "rounded-xl bg-indigo-700 px-5 py-2.5 font-semibold text-white shadow-md"
                : "rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-2.5 font-semibold text-white shadow-md shadow-indigo-200 transition hover:-translate-y-0.5 hover:shadow-lg"
            }
          >
            Get Started
          </NavLink>

        </div>


        {/* ================= MOBILE BUTTON ================= */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 md:hidden"
          aria-label="Open menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

      </div>

    </nav>
  );
}

export default Navbar;