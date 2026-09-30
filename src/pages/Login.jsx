import React, { useState } from "react";
import { Mail, Lock, Check, BookOpen } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch(
            "http://localhost:8080/api/auth/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            }
        );

        const data = await response.text();

        if (!response.ok) {
            alert(data);
            return;
        }

        console.log("Login successful:", data);

        window.location.href =
            "http://localhost:5173/student/dashboard";

    } catch (error) {
        console.error("Login error:", error);
        alert("Unable to connect to server");
    }
};

  return (
    <div className="min-h-screen w-full bg-slate-100 flex items-center justify-center p-4 font-sans">
      {/* Main Container Card */}
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row min-h-[600px]">
        {/* Left Section - Form */}
        <div className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-between">
          <div>
            {/* Logo */}
            <div className="flex items-center gap-2 mb-8">
              <div className="text-indigo-600">
                {/* Reference Icon: EduReach Book Logo */}
                <BookOpen className="w-7 h-7 stroke-[2.5]" />
              </div>
              <span className="text-xl font-bold text-slate-800 tracking-tight">
                EduReach
              </span>
            </div>

            {/* Header Text */}
            <div className="mb-6">
              <h1 className="text-3xl font-extrabold text-slate-900 mb-2">
                Welcome Back!
              </h1>
              <p className="text-sm text-slate-500 leading-relaxed">
                Login to continue your learning journey with EduReach.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email Input */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Forgot Password Link */}
              <div className="flex justify-end">
                <a
                  href="#forgot-password"
                  className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
                >
                  Forgot password?
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-md shadow-indigo-200 active:scale-[0.99] transition-all duration-150"
              >
                Login
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-3 bg-white text-slate-400">
                  or continue with
                </span>
              </div>
            </div>

            {/* Social Logins */}
            <div className="grid grid-cols-3 gap-3">
              {/* Google Button */}
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="flex items-center justify-center py-2.5 px-4 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors"
              >
                {/* Reference Image: Google SVG Logo */}
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
              </button>

              {/* GitHub Button */}
              <button className="flex items-center justify-center py-2.5 px-4 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
                {/* Reference Image: GitHub Logo */}
                <svg className="w-5 h-5 fill-slate-900" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </button>

              {/* Microsoft Button */}
              <button className="flex items-center justify-center py-2.5 px-4 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
                {/* Reference Image: Microsoft Grid Logo */}
                <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
                  <div className="bg-[#F25022]"></div>
                  <div className="bg-[#7FBA00]"></div>
                  <div className="bg-[#00A4EF]"></div>
                  <div className="bg-[#FFB900]"></div>
                </div>
              </button>
            </div>
          </div>

          {/* Footer Register Link */}
          <div className="mt-8 text-center text-xs text-slate-500">
            Don't have an account?{" "}
            <a
              href="#register"
              className="font-bold text-indigo-600 hover:underline"
            >
              Register
            </a>
          </div>
        </div>

        {/* Right Section - Decorative Feature Banner */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-8 sm:p-12 flex flex-col justify-center relative overflow-hidden">
          {/* Subtle Background Decorative Blobs */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-100/50 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-sm mx-auto w-full">
            {/* Image Placeholder / Icon Box */}
            <div className="mb-8">
              <div className="w-20 h-20 bg-indigo-100/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-inner">
                {/* 
                  IMAGE REFERENCE: 
                  In your production code, replace the GraduationCap icon below 
                  with your 3D graduation cap illustration / image asset:
                  <img src="/path-to-3d-graduation-cap.png" alt="Graduation Cap" className="w-16 h-16 object-contain" />
                */}
                <div className="text-indigo-600">
                  <BookOpen className="w-10 h-10 stroke-[2]" />
                </div>
              </div>
            </div>

            {/* Main Feature Heading */}
            <h2 className="text-4xl font-extrabold text-slate-900 leading-tight mb-8">
              Learn.
              <br />
              Create.
              <br />
              Grow.
            </h2>

            {/* Features Checklist */}
            <ul className="space-y-4">
              {[
                "Access to 500+ courses",
                "Learn from industry experts",
                "Build real world projects",
                "Track your progress",
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-md bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm font-medium text-slate-700">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
