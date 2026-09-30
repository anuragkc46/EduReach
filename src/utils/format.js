const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Takes an ISO date (YYYY-MM-DD). Parsed by hand so the result never shifts
// with the viewer's timezone, which `new Date('2026-09-24')` can do.
export function formatDate(isoDate, { withYear = true } = {}) {
  const [year, month, day] = isoDate.split('-').map(Number);
  const dayAndMonth = `${day} ${MONTHS[month - 1]}`;
  return withYear ? `${dayAndMonth} ${year}` : dayAndMonth;
}

export function pluralize(count, singular, plural = `${singular}s`) {
  return `${count} ${count === 1 ? singular : plural}`;
}
