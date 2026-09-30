import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              EduReach
            </h2>

            <p className="text-sm leading-6">
              Empowering students and educators through accessible
              and quality digital education.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-sm">
              <NavLink to="/" className="hover:text-white">
                Home
              </NavLink>

              <NavLink to="/about" className="hover:text-white">
                About
              </NavLink>

              <NavLink to="/help" className="hover:text-white">
                Help
              </NavLink>
            </div>
          </div>

          {/* Learning */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Learning
            </h3>

            <div className="flex flex-col gap-3 text-sm">
              <span className="hover:text-white cursor-pointer">
                Courses
              </span>

              <span className="hover:text-white cursor-pointer">
                Assignments
              </span>

              <span className="hover:text-white cursor-pointer">
                Quizzes
              </span>
            </div>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Account
            </h3>

            <div className="flex flex-col gap-3 text-sm">
              <NavLink to="/login" className="hover:text-white">
                Login
              </NavLink>

              <NavLink to="/register" className="hover:text-white">
                Register
              </NavLink>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-center">
          © {new Date().getFullYear()} EduReach. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;