// Single source of truth for EduReach's status colours and labels.
// Every badge, icon tile and progress bar reads from here, so the palette
// stays consistent across all student pages.

export const TONE_CLASSES = {
  blue: {
    badge: 'bg-blue-50 text-blue-700 ring-blue-600/20',
    dot: 'bg-blue-500',
    tile: 'bg-blue-50 text-blue-600',
    bar: 'bg-blue-600',
  },
  green: {
    badge: 'bg-emerald-50 text-emerald-700 ring-emerald-600/20',
    dot: 'bg-emerald-500',
    tile: 'bg-emerald-50 text-emerald-600',
    bar: 'bg-emerald-500',
  },
  amber: {
    badge: 'bg-amber-50 text-amber-800 ring-amber-600/20',
    dot: 'bg-amber-500',
    tile: 'bg-amber-50 text-amber-600',
    bar: 'bg-amber-500',
  },
  red: {
    badge: 'bg-red-50 text-red-700 ring-red-600/20',
    dot: 'bg-red-500',
    tile: 'bg-red-50 text-red-600',
    bar: 'bg-red-500',
  },
  slate: {
    badge: 'bg-slate-100 text-slate-600 ring-slate-500/20',
    dot: 'bg-slate-400',
    tile: 'bg-slate-100 text-slate-600',
    bar: 'bg-slate-500',
  },
};

export const STATUS_CONFIG = {
  // Assignments
  pending: { label: 'Pending', tone: 'amber' },
  submitted: { label: 'Submitted', tone: 'blue' },
  graded: { label: 'Graded', tone: 'green' },
  overdue: { label: 'Overdue', tone: 'red' },

  // Quizzes and courses
  upcoming: { label: 'Upcoming', tone: 'blue' },
  completed: { label: 'Completed', tone: 'green' },
  'in-progress': { label: 'In progress', tone: 'blue' },

  // Performance levels (see getPerformanceLevel in utils/scoring.js)
  excellent: { label: 'Excellent', tone: 'green' },
  good: { label: 'Good', tone: 'blue' },
  fair: { label: 'Fair', tone: 'amber' },
  'needs-improvement': { label: 'Needs work', tone: 'red' },
  'no-data': { label: 'No scores yet', tone: 'slate' },
};
