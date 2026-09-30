import { AlertTriangle, CheckCircle2, Clock, Send } from 'lucide-react';
import { formatDate } from '../../utils/format';
import { studentRoutes } from '../../utils/studentRoutes';
import Button from './Button';
import Card from './Card';
import StatusBadge from './StatusBadge';
import { STATUS_CONFIG, TONE_CLASSES } from './statusConfig';

const STATUS_ICONS = {
  pending: Clock,
  overdue: AlertTriangle,
  submitted: Send,
  graded: CheckCircle2,
};

const ACTIONS = {
  pending: { label: 'Submit Work', variant: 'primary' },
  overdue: { label: 'Submit Late', variant: 'danger' },
  submitted: { label: 'View Submission', variant: 'secondary' },
  graded: { label: 'View Feedback', variant: 'secondary' },
};

function getScoreLabel({ status, score, maxScore }) {
  if (score !== null) return `${score}/${maxScore}`;
  return status === 'submitted' ? 'Awaiting grade' : '—';
}

// variant="full"    -> Assignments page (score column, single row on wide screens)
// variant="compact" -> Dashboard list (no score, always stacked)
export default function AssignmentCard({ assignment, variant = 'full' }) {
  const { id, title, course, dueDate, status, submittedOn } = assignment;
  const isFull = variant === 'full';
  const Icon = STATUS_ICONS[status];
  const tone = TONE_CLASSES[STATUS_CONFIG[status].tone];
  const action = ACTIONS[status];

  return (
    <Card className="p-4 transition-colors hover:border-slate-300 sm:p-5">
      <div className={`flex flex-col gap-4 ${isFull ? 'xl:flex-row xl:items-center xl:gap-6' : ''}`}>
        <div className="flex min-w-0 flex-1 items-start gap-3 sm:gap-4">
          <span
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${tone.tile}`}
          >
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="font-medium leading-snug text-slate-900">{title}</h3>
            <p className="mt-0.5 text-sm text-slate-500">{course}</p>
            {isFull && submittedOn && (
              <p className="mt-1 text-xs text-slate-500">Submitted on {formatDate(submittedOn)}</p>
            )}
          </div>
          <StatusBadge status={status} />
        </div>

        <div
          className={`flex flex-wrap items-center justify-between gap-x-6 gap-y-3 ${
            isFull ? 'xl:flex-nowrap xl:justify-end xl:gap-8' : ''
          }`}
        >
          <dl className="flex gap-6 xl:gap-8">
            <div className={isFull ? 'xl:w-28' : ''}>
              <dt className="text-xs text-slate-500">Due date</dt>
              <dd
                className={`mt-0.5 text-sm font-medium ${
                  status === 'overdue' ? 'text-red-600' : 'text-slate-900'
                }`}
              >
                {formatDate(dueDate)}
              </dd>
            </div>
            {isFull && (
              <div className="xl:w-28">
                <dt className="text-xs text-slate-500">Score</dt>
                <dd
                  className={`mt-0.5 text-sm ${
                    assignment.score !== null ? 'font-medium text-slate-900' : 'text-slate-500'
                  }`}
                >
                  {getScoreLabel(assignment)}
                </dd>
              </div>
            )}
          </dl>

          <Button
            to={studentRoutes.assignment(id)}
            variant={action.variant}
            size="sm"
            className={`w-full sm:w-auto ${isFull ? 'xl:w-36' : ''}`}
          >
            {action.label}
          </Button>
        </div>
      </div>
    </Card>
  );
}
