import { formatDate } from '../../utils/format';
import { getPerformanceLevel, toPercent } from '../../utils/scoring';
import { STATUS_CONFIG, TONE_CLASSES } from './statusConfig';

const GRID_LINES = [0, 25, 50, 75, 100];
const LEGEND_LEVELS = ['excellent', 'good', 'fair', 'needs-improvement'];

// Pure CSS bar chart. `items` are results in chronological order (oldest first).
export default function ScoreTrendChart({ items, average }) {
  const bars = items.map((item) => {
    const percent = toPercent(item.score, item.maxScore);
    const [day, month] = formatDate(item.date, { withYear: false }).split(' ');
    return { ...item, percent, day, month, tone: STATUS_CONFIG[getPerformanceLevel(percent)].tone };
  });

  const lowest = Math.min(...bars.map((bar) => bar.percent));
  const highest = Math.max(...bars.map((bar) => bar.percent));

  return (
    <div>
      <div
        role="img"
        aria-label={`Bar chart of your last ${bars.length} scores, from ${lowest}% to ${highest}%`}
      >
        {/* Plot area. The left margin holds the y-axis labels. */}
        <div className="relative ml-9 h-56">
          {GRID_LINES.map((line) => (
            <div
              key={line}
              className="absolute inset-x-0 border-t border-slate-100"
              style={{ bottom: `${line}%` }}
            >
              <span className="absolute -left-9 w-7 -translate-y-1/2 text-right text-xs text-slate-500">
                {line}
              </span>
            </div>
          ))}

          {average !== null && (
            <div
              className="absolute inset-x-0 border-t border-dashed border-blue-400"
              style={{ bottom: `${average}%` }}
            />
          )}

          <div className="absolute inset-0 flex">
            {bars.map((bar) => (
              <div
                key={bar.id}
                className="flex min-w-0 flex-1 flex-col items-center justify-end"
                title={`${bar.title}: ${bar.score}/${bar.maxScore} (${bar.percent}%)`}
              >
                <span className="mb-1 shrink-0 text-xs font-medium text-slate-700">
                  {bar.percent}
                </span>
                <div
                  className={`w-6 shrink-0 rounded-t-md sm:w-9 ${TONE_CLASSES[bar.tone].bar}`}
                  style={{ height: `${bar.percent}%` }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="ml-9 mt-2 flex">
          {bars.map((bar) => (
            <div key={bar.id} className="min-w-0 flex-1 text-center text-xs leading-tight text-slate-500">
              <span className="block font-medium text-slate-700">{bar.day}</span>
              <span className="block">{bar.month}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-600">
        {LEGEND_LEVELS.map((level) => (
          <span key={level} className="flex items-center gap-1.5">
            <span
              className={`h-2.5 w-2.5 rounded-sm ${TONE_CLASSES[STATUS_CONFIG[level].tone].bar}`}
              aria-hidden="true"
            />
            {STATUS_CONFIG[level].label}
          </span>
        ))}
        {average !== null && (
          <span className="flex items-center gap-1.5">
            <span className="w-4 border-t border-dashed border-blue-400" aria-hidden="true" />
            Average ({average}%)
          </span>
        )}
      </div>
    </div>
  );
}
