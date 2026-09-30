function Home() {
  return (
    <div className="overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        {/* Decorative background */}
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-purple-200/40 blur-3xl"></div>

        <div className="absolute top-40 -left-20 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl"></div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">
          {/* LEFT CONTENT */}
          <div>
            {/* Small badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-4 py-2 text-sm font-medium text-indigo-700 shadow-sm">
              <span>✦</span>
              Learn • Grow • Achieve
            </div>

            {/* Heading */}
            <h1 className="max-w-2xl text-5xl font-bold leading-tight tracking-tight text-slate-900 md:text-6xl">
              Education for a{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Brighter
              </span>
              <br />
              Tomorrow
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              EduReach is a modern learning platform that connects students and
              teachers, making quality education accessible to everyone,
              anytime, anywhere.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:shadow-xl">
                Get Started →
              </button>

              <button className="rounded-xl border border-slate-300 bg-white px-7 py-3.5 font-semibold text-slate-800 transition hover:border-indigo-400 hover:text-indigo-600">
                Explore Courses
              </button>
            </div>

            {/* Trust text */}
            <div className="mt-8 flex items-center gap-3 text-sm text-slate-500">
              <div className="flex -space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-indigo-500 text-xs text-white">
                  A
                </div>

                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-purple-500 text-xs text-white">
                  S
                </div>

                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-blue-500 text-xs text-white">
                  R
                </div>
              </div>

              <span>Join thousands of learners on EduReach</span>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Main image container */}
            <div className="relative">
              <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-indigo-300 to-purple-300 blur-3xl opacity-30"></div>

              <div className="relative flex h-[420px] w-[350px] items-end justify-center overflow-hidden rounded-[3rem] bg-gradient-to-br from-indigo-100 to-purple-100 shadow-2xl md:h-[500px] md:w-[420px]">
                {/* Temporary student illustration */}
                <div className="mb-12 text-center">
                  <div className="mx-auto flex h-48 w-48 items-center justify-center rounded-full bg-white/70 shadow-lg overflow-hidden">
                    <img
                      src="/src/assets/HomePageGirl2_Image.png"
                      alt="Student learning on EduReach"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="mt-5 rounded-2xl bg-white/80 px-6 py-4 shadow-lg backdrop-blur">
                    <p className="font-semibold text-slate-900">
                      Knowledge Builds
                    </p>

                    <p className="font-semibold text-indigo-600">
                      Better Futures
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating card 1 */}
              <div className="absolute -left-8 top-16 rounded-2xl bg-white p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-xl">
                    👥
                  </div>

                  <div>
                    <p className="font-bold text-slate-900">1000+</p>

                    <p className="text-xs text-slate-500">Students Learning</p>
                  </div>
                </div>
              </div>

              {/* Floating card 2 */}
              <div className="absolute -right-8 top-32 rounded-2xl bg-white p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-xl">
                    🎓
                  </div>

                  <div>
                    <p className="font-bold text-slate-900">Expert</p>

                    <p className="text-xs text-slate-500">Teachers</p>
                  </div>
                </div>
              </div>

              {/* Floating card 3 */}
              <div className="absolute -right-4 bottom-20 rounded-2xl bg-white p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-xl">
                    📊
                  </div>

                  <div>
                    <p className="font-bold text-slate-900">Track</p>

                    <p className="text-xs text-slate-500">Your Progress</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="relative z-10 mx-auto -mt-8 max-w-6xl px-6">
        <div className="grid overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-xl sm:grid-cols-2 lg:grid-cols-4">
          <div className="p-6 text-center">
            <h3 className="text-3xl font-bold text-indigo-600">10K+</h3>
            <p className="mt-1 text-sm text-slate-500">Students</p>
          </div>

          <div className="border-t border-slate-100 p-6 text-center sm:border-l lg:border-t-0">
            <h3 className="text-3xl font-bold text-indigo-600">500+</h3>
            <p className="mt-1 text-sm text-slate-500">Courses</p>
          </div>

          <div className="border-t border-slate-100 p-6 text-center lg:border-l lg:border-t-0">
            <h3 className="text-3xl font-bold text-indigo-600">200+</h3>
            <p className="mt-1 text-sm text-slate-500">Expert Teachers</p>
          </div>

          <div className="border-t border-slate-100 p-6 text-center lg:border-l lg:border-t-0">
            <h3 className="text-3xl font-bold text-indigo-600">95%</h3>
            <p className="mt-1 text-sm text-slate-500">Student Satisfaction</p>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE EDUREACH ================= */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section Heading */}
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-semibold text-indigo-600">WHY EDUREACH?</p>

            <h2 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Why Choose <span className="text-indigo-600">EduReach?</span>
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              A complete learning ecosystem designed to help students learn
              better and teachers teach smarter.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-indigo-200 hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl transition group-hover:bg-indigo-600">
                📚
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                Diverse Courses
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Access a wide range of courses covering different domains and
                technologies.
              </p>

              <button className="mt-5 font-semibold text-indigo-600 transition group-hover:translate-x-1">
                Explore Courses →
              </button>
            </div>

            {/* Card 2 */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-indigo-200 hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-2xl transition group-hover:bg-indigo-600">
                🎯
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                Track Progress
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Monitor your learning journey with interactive tools, quizzes
                and progress tracking.
              </p>

              <button className="mt-5 font-semibold text-indigo-600 transition group-hover:translate-x-1">
                Track Progress →
              </button>
            </div>

            {/* Card 3 */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-indigo-200 hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-2xl transition group-hover:bg-indigo-600">
                👥
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                Connect & Collaborate
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Interact with teachers and fellow students through discussions
                and collaboration.
              </p>

              <button className="mt-5 font-semibold text-indigo-600 transition group-hover:translate-x-1">
                Join Community →
              </button>
            </div>

            {/* Card 4 */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-indigo-200 hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-2xl transition group-hover:bg-indigo-600">
                ⚡
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                Flexible Learning
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Learn anytime and anywhere at your own pace with flexible
                learning resources.
              </p>

              <button className="mt-5 font-semibold text-indigo-600 transition group-hover:translate-x-1">
                Start Learning →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= POPULAR COURSES ================= */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Heading */}
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="font-semibold text-indigo-600">
                LEARN SOMETHING NEW
              </p>

              <h2 className="mt-2 text-4xl font-bold text-slate-900 md:text-5xl">
                Popular <span className="text-indigo-600">Courses</span>
              </h2>

              <p className="mt-4 max-w-2xl text-lg text-slate-600">
                Explore our most popular courses and start building skills that
                matter for your future.
              </p>
            </div>

            <button className="font-semibold text-indigo-600 transition hover:translate-x-1">
              View All Courses →
            </button>
          </div>

          {/* Course Cards */}
          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {/* Course 1 */}
            <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-500 to-cyan-500">
                <div className="flex h-full items-center justify-center">
  <img
    src="/src/assets/reactImg.webp"
    alt="React"
    className="h-40 w-40 object-contain"
  />
</div>

                <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-indigo-600 shadow">
                  Development
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-slate-900">
                  Web Development with React
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Learn modern frontend development with React and build
                  real-world applications.
                </p>

                <div className="mt-4 flex items-center gap-2 text-sm">
                  <span className="font-medium text-slate-700">
                    Amit Sharma
                  </span>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">★</span>
                    <span className="font-semibold">4.8</span>
                    <span className="text-slate-400">(1.2K students)</span>
                  </div>

                  <button className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 transition hover:bg-indigo-600 hover:text-white">
                    →
                  </button>
                </div>
              </div>
            </div>

            {/* Course 2 */}
            <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-orange-500 to-red-500">
               <div className="flex h-full items-center justify-center">
  <img
    src="/src/assets/javaImg2.webp"
    alt="Java"
    className="h-40 w-40 object-contain"
  />
</div>

                <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-orange-600 shadow">
                  Programming
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-slate-900">
                  Java Programming for Beginners
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Master Java fundamentals, OOP concepts and problem solving
                  from scratch.
                </p>

                <div className="mt-4 flex items-center gap-2 text-sm">
                  <span className="font-medium text-slate-700">
                    Priya Verma
                  </span>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">★</span>
                    <span className="font-semibold">4.7</span>
                    <span className="text-slate-400">(980 students)</span>
                  </div>

                  <button className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 transition hover:bg-indigo-600 hover:text-white">
                    →
                  </button>
                </div>
              </div>
            </div>

            {/* Course 3 */}
            <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-yellow-400 to-orange-500">
                <div className="flex h-full items-center justify-center">
  <img
    src="/src/assets/pyImg.png"
    alt="Python"
    className="h-100 w-100 object-contain"
  />
</div>

                <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-orange-600 shadow">
                  Data Science
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-slate-900">
                  Python for Data Science
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Learn Python, data analysis and the fundamentals of data
                  science.
                </p>

                <div className="mt-4 flex items-center gap-2 text-sm">
                  <span className="font-medium text-slate-700">
                    Rohan Mehta
                  </span>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">★</span>
                    <span className="font-semibold">4.6</span>
                    <span className="text-slate-400">(1.5K students)</span>
                  </div>

                  <button className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 transition hover:bg-indigo-600 hover:text-white">
                    →
                  </button>
                </div>
              </div>
            </div>

            {/* Course 4 */}
            <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-purple-500 to-indigo-600">
                <div className="flex h-full items-center justify-center">
  <img
    src="/src/assets/dsa.jpg"
    alt="dsa"
    className="h-100 w-100 object-contain"
  />
</div>

                <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-purple-600 shadow">
                  DSA
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-slate-900">
                  Data Structures & Algorithms
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Master DSA concepts, algorithms and problem solving for
                  technical interviews.
                </p>

                <div className="mt-4 flex items-center gap-2 text-sm">
                  <span className="font-medium text-slate-700">Neha Singh</span>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">★</span>
                    <span className="font-semibold">4.8</span>
                    <span className="text-slate-400">(2K students)</span>
                  </div>

                  <button className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 transition hover:bg-indigo-600 hover:text-white">
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOW EDUREACH WORKS ================= */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Heading */}
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-semibold text-indigo-600">SIMPLE & EASY</p>

            <h2 className="mt-2 text-4xl font-bold text-slate-900 md:text-5xl">
              How <span className="text-indigo-600">EduReach</span> Works
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Start your learning journey in just three simple steps.
            </p>
          </div>

          {/* Steps */}
          <div className="relative mt-16 grid gap-10 md:grid-cols-3">
            {/* Connecting Line */}
            <div className="absolute left-[20%] right-[20%] top-16 hidden h-px bg-indigo-200 md:block"></div>

            {/* STEP 1 */}
            <div className="relative text-center">
              <div className="relative mx-auto flex h-32 w-32 items-center justify-center rounded-full border-8 border-indigo-50 bg-white shadow-lg">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-indigo-600 text-3xl text-white">
                  👤
                </div>

                <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-sm font-bold text-white">
                  1
                </span>
              </div>

              <h3 className="mt-7 text-xl font-bold text-slate-900">
                Create Your Account
              </h3>

              <p className="mx-auto mt-3 max-w-xs leading-7 text-slate-600">
                Sign up on EduReach and create your personalized learning
                profile.
              </p>
            </div>

            {/* STEP 2 */}
            <div className="relative text-center">
              <div className="relative mx-auto flex h-32 w-32 items-center justify-center rounded-full border-8 border-purple-50 bg-white shadow-lg">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-purple-600 text-3xl text-white">
                  🔍
                </div>

                <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
                  2
                </span>
              </div>

              <h3 className="mt-7 text-xl font-bold text-slate-900">
                Explore & Learn
              </h3>

              <p className="mx-auto mt-3 max-w-xs leading-7 text-slate-600">
                Discover courses, enroll in your favorites and learn from expert
                teachers.
              </p>
            </div>

            {/* STEP 3 */}
            <div className="relative text-center">
              <div className="relative mx-auto flex h-32 w-32 items-center justify-center rounded-full border-8 border-blue-50 bg-white shadow-lg">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-3xl text-white">
                  🏆
                </div>

                <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-sm font-bold text-white">
                  3
                </span>
              </div>

              <h3 className="mt-7 text-xl font-bold text-slate-900">
                Track & Achieve
              </h3>

              <p className="mx-auto mt-3 max-w-xs leading-7 text-slate-600">
                Complete courses, track your progress and achieve your learning
                goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STUDENTS & TEACHERS ================= */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Heading */}
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-semibold text-indigo-600">
              ONE PLATFORM, TWO EXPERIENCES
            </p>

            <h2 className="mt-2 text-4xl font-bold text-slate-900 md:text-5xl">
              Built for <span className="text-indigo-600">Everyone</span>
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Whether you're here to learn or teach, EduReach gives you the
              tools you need to succeed.
            </p>
          </div>

          {/* Two Cards */}
          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {/* ================= STUDENT ================= */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 to-blue-700 p-8 text-white shadow-xl md:p-10">
              {/* Decorative circles */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10"></div>

              <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-white/5"></div>

              <div className="relative">
                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-3xl backdrop-blur">
                  🎓
                </div>

                <p className="mt-7 text-sm font-semibold uppercase tracking-wider text-indigo-200">
                  For Students
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  Learn. Practice. Achieve.
                </h3>

                <p className="mt-4 max-w-lg leading-7 text-indigo-100">
                  Access quality courses, complete assignments, take quizzes and
                  track your academic progress from one place.
                </p>

                {/* Features */}
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
                      ✓
                    </span>

                    <span>Access online courses</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
                      ✓
                    </span>

                    <span>Complete assignments & quizzes</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
                      ✓
                    </span>

                    <span>Track your learning progress</span>
                  </div>
                </div>

                <button className="mt-9 rounded-xl bg-white px-6 py-3 font-semibold text-indigo-700 shadow-lg transition hover:-translate-y-1">
                  Start Learning →
                </button>
              </div>
            </div>

            {/* ================= TEACHER ================= */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600 to-fuchsia-700 p-8 text-white shadow-xl md:p-10">
              {/* Decorative circles */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10"></div>

              <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-white/5"></div>

              <div className="relative">
                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-3xl backdrop-blur">
                  👨‍🏫
                </div>

                <p className="mt-7 text-sm font-semibold uppercase tracking-wider text-purple-200">
                  For Teachers
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  Teach. Manage. Inspire.
                </h3>

                <p className="mt-4 max-w-lg leading-7 text-purple-100">
                  Create engaging courses, manage students, upload assignments
                  and monitor student performance with powerful tools.
                </p>

                {/* Features */}
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
                      ✓
                    </span>

                    <span>Create and manage courses</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
                      ✓
                    </span>

                    <span>Manage assignments & quizzes</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
                      ✓
                    </span>

                    <span>Monitor student performance</span>
                  </div>
                </div>

                <button className="mt-9 rounded-xl bg-white px-6 py-3 font-semibold text-purple-700 shadow-lg transition hover:-translate-y-1">
                  Start Teaching →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Heading */}
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-semibold text-indigo-600">STUDENT STORIES</p>

            <h2 className="mt-2 text-4xl font-bold text-slate-900 md:text-5xl">
              What Our <span className="text-indigo-600">Learners Say</span>
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              See how EduReach is helping students learn, grow and achieve their
              goals.
            </p>
          </div>

          {/* Testimonials */}
          <div className="mt-16 grid gap-7 md:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              {/* Stars */}
              <div className="flex gap-1 text-yellow-400">★ ★ ★ ★ ★</div>

              <p className="mt-5 leading-7 text-slate-600">
                "EduReach made it much easier for me to stay organized. I can
                access my courses, assignments and results all from one place."
              </p>

              <div className="mt-7 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-xl">
                  👨🏻
                </div>

                <div>
                  <h4 className="font-bold text-slate-900">Rahul Kumar</h4>

                  <p className="text-sm text-slate-500">
                    Computer Science Student
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex gap-1 text-yellow-400">★ ★ ★ ★ ★</div>

              <p className="mt-5 leading-7 text-slate-600">
                "The course structure and progress tracking are really helpful.
                I always know what I have completed and what I need to learn
                next."
              </p>

              <div className="mt-7 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-xl">
                  👩🏻
                </div>

                <div>
                  <h4 className="font-bold text-slate-900">Ananya Sharma</h4>

                  <p className="text-sm text-slate-500">Engineering Student</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex gap-1 text-yellow-400">★ ★ ★ ★ ★</div>

              <p className="mt-5 leading-7 text-slate-600">
                "As a teacher, EduReach gives me a simple way to manage courses
                and assignments while keeping track of my students' progress."
              </p>

              <div className="mt-7 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-xl">
                  👨🏻‍🏫
                </div>

                <div>
                  <h4 className="font-bold text-slate-900">Amit Verma</h4>

                  <p className="text-sm text-slate-500">Course Instructor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="relative overflow-hidden bg-slate-950 py-24">
        {/* Background decorations */}
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-indigo-600/30 blur-3xl"></div>

        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-purple-600/30 blur-3xl"></div>

        <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
          {/* Badge */}
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-indigo-200 backdrop-blur">
            <span>✦</span>
            Your learning journey starts here
          </div>

          {/* Heading */}
          <h2 className="mt-7 text-4xl font-bold tracking-tight text-white md:text-6xl">
            Ready to Start Your{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Learning Journey?
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Join EduReach and discover a smarter way to learn, practice your
            skills and achieve your goals.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl">
              Get Started →
            </button>

            <button className="rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/20">
              Explore Courses
            </button>
          </div>

          {/* Small trust text */}
          <p className="mt-7 text-sm text-slate-400">
            Free to get started • Learn at your own pace • Learn anywhere
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
