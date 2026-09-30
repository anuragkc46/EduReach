export function toPercent(score, maxScore) {
  return Math.round((score / maxScore) * 100);
}

// Average of score/maxScore across items, as a whole-number percentage.
// Returns null when there is nothing to average.
export function averagePercent(items) {
  if (items.length === 0) return null;
  const total = items.reduce((sum, item) => sum + (item.score / item.maxScore) * 100, 0);
  return Math.round(total / items.length);
}

// Keys match the performance entries in components/student/statusConfig.js
export function getPerformanceLevel(percent) {
  if (percent >= 90) return 'excellent';
  if (percent >= 75) return 'good';
  if (percent >= 60) return 'fair';
  return 'needs-improvement';
}
