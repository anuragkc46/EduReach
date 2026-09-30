import { Calendar, HelpCircle, ListChecks, RotateCcw, Timer } from 'lucide-react';
import { formatDate, pluralize } from '../../utils/format';
import { getPerformanceLevel, toPercent } from '../../utils/scoring';
import { studentRoutes } from '../../utils/studentRoutes';
import Button from './Button';
import Card from './Card';
import ProgressBar from './ProgressBar';
import StatusBadge from './StatusBadge';
import { STATUS_CONFIG, TONE_CLASSES } from './statusConfig';

function QuizAction({ quiz, className = '' }) {
  if (quiz.status === 'completed') {
    return (
      <Button to={studentRoutes.quizResult(quiz.id)} variant="secondary" className={className}>
        View Result
      </Button>
    );
  }

  return (
    <Button to={studentRoutes.quiz(quiz.id)} className={className}>
      Start Quiz
    </Button>
  );
}

function MetaItem({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-2">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
      <div>
        <dt className="text-xs text-slate-500">{label}</dt>
        <dd className="text-sm font-medium text-slate-800">{value}</dd>
      </div>
    </div>
  );
}

function QuizTile({ quiz }) {
  const isCompleted = quiz.status === 'completed';
  const percent = isCompleted ? toPercent(quiz.score, quiz.maxScore) : null;
  const level = isCompleted ? getPerformanceLevel(percent) : null;
  const tileTone = TONE_CLASSES[STATUS_CONFIG[quiz.status].tone].tile;

  return (
    <Card className="flex h-full flex-col p-5 transition hover:border-slate-300 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <span className={`flex h-10 w-10 items-center justify-center rounded-lg ${tileTone}`}>
          <ListChecks className="h-5 w-5" aria-hidden="true" />
        </span>
        <StatusBadge status={quiz.status} />
      </div>

      <h3 className="mt-4 text-base font-semibold text-slate-900">{quiz.title}</h3>
      <p className="mt-0.5 text-sm text-slate-500">{quiz.course}</p>

      <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3">
        <MetaItem icon={HelpCircle} label="Questions" value={quiz.questions} />
        <MetaItem icon={Timer} label="Duration" value={`${quiz.duration} min`} />
        <MetaItem
          icon={Calendar}
          label={isCompleted ? 'Completed on' : 'Due date'}
          value={formatDate(isCompleted ? quiz.completedOn : quiz.dueDate)}
        />
        <MetaItem
          icon={RotateCcw}
          label="Attempts"
          value={`${quiz.attemptsUsed} of ${quiz.attemptsAllowed} used`}
        />
      </dl>

      {isCompleted && (
        <div className="mt-4 rounded-lg bg-slate-50 p-3">
          <div className="flex items-baseline justify-between">
            <span className="text-sm text-slate-500">Score</span>
            <span className="text-sm font-semibold text-slate-900">
              {quiz.score}/{quiz.maxScore}
              <span className="ml-1 font-normal text-slate-500">({percent}%)</span>
            </span>
          </div>
          <div className="mt-2">
            <ProgressBar
              value={percent}
              tone={STATUS_CONFIG[level].tone}
              size="sm"
              label={`${quiz.title} score`}
            />
          </div>
        </div>
      )}

      <div className="mt-auto pt-5">
        <QuizAction quiz={quiz} className="w-full" />
      </div>
    </Card>
  );
}

// A single line for the "Upcoming Quizzes" panel. Lives inside a parent
// container that supplies the border and dividers, so it has no Card of its own.
function QuizRow({ quiz }) {
  return (
    <div className="flex flex-col gap-3 px-4 py-4 sm:px-5 xl:flex-row xl:items-center xl:gap-6">
      <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${TONE_CLASSES.blue.tile}`}
        >
          <ListChecks className="h-5 w-5" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <h3 className="font-medium leading-snug text-slate-900">{quiz.title}</h3>
          <p className="mt-0.5 text-sm text-slate-500">{quiz.course}</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 xl:flex-nowrap">
        <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-slate-600">
          <li className="flex items-center gap-1.5">
            <HelpCircle className="h-4 w-4 text-slate-400" aria-hidden="true" />
            {pluralize(quiz.questions, 'question')}
          </li>
          <li className="flex items-center gap-1.5">
            <Timer className="h-4 w-4 text-slate-400" aria-hidden="true" />
            {quiz.duration} min
          </li>
          <li className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4 text-slate-400" aria-hidden="true" />
            Due {formatDate(quiz.dueDate)}
          </li>
        </ul>
        <QuizAction quiz={quiz} className="w-full sm:w-auto" />
      </div>
    </div>
  );
}

// variant="card" -> grid tile (default)
// variant="row"  -> single line for the upcoming panel
export default function QuizCard({ quiz, variant = 'card' }) {
  return variant === 'row' ? <QuizRow quiz={quiz} /> : <QuizTile quiz={quiz} />;
}
