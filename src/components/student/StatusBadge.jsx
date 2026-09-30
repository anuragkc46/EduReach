import { STATUS_CONFIG, TONE_CLASSES } from './statusConfig';

export default function StatusBadge({ status, label }) {
  const config = STATUS_CONFIG[status] ?? { label: status, tone: 'slate' };
  const tone = TONE_CLASSES[config.tone];

  return (
    <span
      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${tone.badge}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${tone.dot}`} aria-hidden="true" />
      {label ?? config.label}
    </span>
  );
}
