import Card from './Card';
import { TONE_CLASSES } from './statusConfig';

export default function StatCard({ label, value, hint, icon: Icon, tone = 'blue' }) {
  return (
    <Card className="p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-sm font-medium text-slate-500">{label}</p>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">{value}</p>
        </div>
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${TONE_CLASSES[tone].tile}`}
        >
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
      </div>
      {hint && <p className="mt-3 text-sm text-slate-500">{hint}</p>}
    </Card>
  );
}
