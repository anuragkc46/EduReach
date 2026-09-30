const BASE = '/student';

export const studentRoutes = {
  dashboard: `${BASE}/dashboard`,
  courses: `${BASE}/courses`,
  assignments: `${BASE}/assignments`,
  quizzes: `${BASE}/quizzes`,
  results: `${BASE}/results`,

  // Detail pages don't exist yet, so these fall back to the list pages and
  // every button still lands on a valid route. When you add detail routes,
  // change them here (e.g. `${BASE}/courses/${id}`) and every card updates.
  course: () => `${BASE}/courses`,
  assignment: () => `${BASE}/assignments`,
  quiz: () => `${BASE}/quizzes`,
  quizResult: () => `${BASE}/results`,
};
