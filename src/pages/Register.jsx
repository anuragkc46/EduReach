import React, { useState } from 'react';
import { User, Mail, Lock, BookOpen } from 'lucide-react';

export default function RegisterPage() {
  const [role, setRole] = useState('Student'); // 'Student' or 'Teacher'
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registering user:', { role, fullName, email, password, confirmPassword });
  };

  return (
    <div className="min-h-screen w-full bg-slate-100 flex items-center justify-center p-4 font-sans">
      {/* Main Container Card */}
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row min-h-[650px]">
        
        {/* Left Section - Form */}
        <div className="w-full md:w-1/2 p-8 sm:p-10 flex flex-col justify-between">
          <div>
            {/* Logo */}
            <div className="flex items-center gap-2 mb-6">
              <div className="text-indigo-600">
                <BookOpen className="w-7 h-7 stroke-[2.5]" />
              </div>
              <span className="text-xl font-bold text-slate-800 tracking-tight">
                EduReach
              </span>
            </div>

            {/* Header Text */}
            <div className="mb-5">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1.5">
                Create an Account
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Join EduReach and start your learning journey.
              </p>
            </div>

            {/* Student / Teacher Toggle */}
            <div className="bg-slate-100/80 p-1 rounded-xl flex items-center mb-5 border border-slate-200/60">
              <button
                type="button"
                onClick={() => setRole('Student')}
                className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all duration-200 ${
                  role === 'Student'
                    ? 'bg-white text-indigo-600 shadow-sm border border-slate-200/60'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                Student
              </button>
              <button
                type="button"
                onClick={() => setRole('Teacher')}
                className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all duration-200 ${
                  role === 'Teacher'
                    ? 'bg-white text-indigo-600 shadow-sm border border-slate-200/60'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                Teacher
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Full Name Input */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
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
                    className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
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
                    placeholder="Create a password"
                    className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Confirm Password Input */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm your password"
                    className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-2.5 px-4 mt-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm rounded-xl shadow-md shadow-indigo-200 active:scale-[0.99] transition-all duration-150"
              >
                Register
              </button>
            </form>
          </div>

          {/* Footer Login Link */}
          <div className="mt-6 text-center text-xs text-slate-500">
            Already have an account?{' '}
            <a
              href="#login"
              className="font-bold text-indigo-600 hover:underline"
            >
              Login
            </a>
          </div>
        </div>

        {/* Right Section - Full Height & Width Banner */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6 sm:p-8 flex flex-col justify-between items-center relative overflow-hidden">
          {/* Background Decorative Blur Blobs */}
          <div className="absolute -top-16 -right-16 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-purple-100/50 rounded-full blur-3xl pointer-events-none"></div>

          {/* Top Tagline */}
          <div className="relative z-10 pt-2 text-center">
            <h2 className="text-2xl sm:text-3xl font-black text-indigo-600 tracking-wide leading-tight">
              Learn <span className="text-slate-900">Skills</span>
            </h2>
            <h2 className="text-2xl sm:text-3xl font-black text-indigo-600 tracking-wide leading-tight">
              Build <span className="text-slate-900">Projects</span>
            </h2>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-wide leading-tight">
              Get Certified
            </h2>
          </div>

          {/* Full-bleed Image Container */}
          <div className="relative z-10 w-full flex-1 flex items-center justify-center p-2">
            <img 
              src="src/assets/register_right_img.png" 
              alt="Student sitting on books working on laptop" 
              className="w-full h-full max-h-[460px] object-contain drop-shadow-xl" 
            />
          </div>
        </div>

      </div>
    </div>
  );
}