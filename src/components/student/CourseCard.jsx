import {
  BookOpen,
  Clock,
  Code,
  Database,
  FileText,
  GitBranch,
  Globe,
  GraduationCap,
  Layers,
  ListChecks,
  Network,
} from 'lucide-react';
import { pluralize } from '../../utils/format';
import { studentRoutes } from '../../utils/studentRoutes';
import Button from './Button';
import Card from './Card';
import ProgressBar from './ProgressBar';

const CATEGORY_ICONS = {
  Programming: Code,
  'Computer Science': Network,
  Frontend: Layers,
  Databases: Database,
  'Web Technologies': Globe,
  'Software Engineering': GitBranch,
};

// variant="full"    -> My Courses grid (description, category, counts)
// variant="compact" -> Dashboard "Continue Learning" (last accessed)
export default function CourseCard({ course, variant = 'full' }) {
  const isCompact = variant === 'compact';
  const isCompleted = course.status === 'completed';
  const Icon = CATEGORY_ICONS[course.category] ?? BookOpen;

  const iconTile = (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
      <Icon className="h-5 w-5" aria-hidden="true" />
    </span>
  );

  return (
    <Card className="flex h-full flex-col p-5 transition hover:border-slate-300 hover:shadow-md">
      {isCompact ? (
        <div className="flex items-start gap-3">
          {iconTile}
          <div className="min-w-0">
            <h3 className="font-semibold leading-snug text-slate-900">{course.title}</h3>
            <p className="mt-0.5 text-sm text-slate-500">{course.instructor}</p>
          </div>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between gap-3">
            {iconTile}
            <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
              {course.category}
            </span>
          </div>
          <h3 className="mt-4 text-base font-semibold text-slate-900">{course.title}</h3>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-500">
            <GraduationCap className="h-4 w-4 shrink-0" aria-hidden="true" />
            {course.instructor}
          </p>
          <p className="mt-3 line-clamp-2 text-sm text-slate-600">{course.description}</p>
        </>
      )}

      <div className="mt-auto pt-5">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="text-slate-500">{isCompleted ? 'Completed' : 'Progress'}</span>
          <span className="font-medium text-slate-900">{course.progress}%</span>
        </div>
        <ProgressBar
          value={course.progress}
          tone={isCompleted ? 'green' : 'blue'}
          label={`${course.title} progress`}
        />
      </div>

      {isCompact ? (
        <p className="mt-3 flex items-center gap-1.5 text-xs text-slate-500">
          <Clock className="h-3.5 w-3.5" aria-hidden="true" />
          Last accessed {course.lastAccessed}
        </p>
      ) : (
        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1 border-t border-slate-100 pt-4 text-sm text-slate-600">
          <span className="flex items-center gap-1.5">
            <FileText className="h-4 w-4 text-slate-400" aria-hidden="true" />
            {pluralize(course.assignments, 'assignment')}
          </span>
          <span className="flex items-center gap-1.5">
            <ListChecks className="h-4 w-4 text-slate-400" aria-hidden="true" />
            {pluralize(course.quizzes, 'quiz', 'quizzes')}
          </span>
        </div>
      )}

      <Button
        to={studentRoutes.course(course.id)}
        variant={isCompleted ? 'secondary' : 'primary'}
        size={isCompact ? 'sm' : 'md'}
        className="mt-4 w-full"
      >
        {isCompleted ? 'Review Course' : 'Continue Learning'}
      </Button>
    </Card>
  );
}
