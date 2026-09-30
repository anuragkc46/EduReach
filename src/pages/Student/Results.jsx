import { ClipboardList, FileText, GraduationCap, ListChecks, TrendingUp } from 'lucide-react';
import Card from '../../components/student/Card';
import DataTable from '../../components/student/DataTable';
import ProgressBar from '../../components/student/ProgressBar';
import PageHeader from '../../components/student/PageHeader';
import ScoreTrendChart from '../../components/student/ScoreTrendChart';
import SectionHeader from '../../components/student/SectionHeader';
import StatCard from '../../components/student/StatCard';
import StatusBadge from '../../components/student/StatusBadge';
import { STATUS_CONFIG, TONE_CLASSES } from '../../components/student/statusConfig';
import { assignments, courses, quizzes, results } from '../../data/studentMockData';
import { formatDate } from '../../utils/format';
import { averagePercent, getPerformanceLevel, toPercent } from '../../utils/scoring';

const RECENT_COUNT = 8;
const LEVELS = ['excellent', 'good', 'fair', 'needs-improvement'];
const LEVEL_RANGES = {
  excellent: '90–100%',
  good: '75–89%',
  fair: '60–74%',
  'needs-improvement': 'Below 60%',
};

const courseColumns = [
  {
    key: 'course',
    header: 'Course',
    render: (course) => (
      <>
        <p className="font-medium text-slate-900">{course.title}</p>
        <p className="text-xs text-slate-500">{course.instructor}</p>
      </>
    ),
  },
  {
    key: 'assignments',
    header: 'Assignments',
    render: (course) => `${course.assignmentsDone} of ${course.assignments} done`,
  },
  {
    key: 'quizzes',
    header: 'Quizzes',
    render: (course) => `${course.quizzesDone} of ${course.quizzes} done`,
  },
  {
    key: 'average',
    header: 'Average score',
    render: (course) =>
      course.average === null ? (
        <span className="text-slate-500">No scores yet</span>
      ) : (
        <span className="font-medium text-slate-900">{course.average}%</span>
      ),
  },
  {
    key: 'progress',
    header: 'Progress',
    wide: true,
    render: (course) => (
      <div className="flex items-center gap-3">
        <ProgressBar
          value={course.progress}
          tone={course.status === 'completed' ? 'green' : 'blue'}
          size="sm"
          label={`${course.title} progress`}
        />
        <span className="w-9 shrink-0 text-right text-xs font-medium text-slate-700">
          {course.progress}%
        </span>
      </div>
    ),
  },
  {
    key: 'status',
    header: 'Performance',
    render: (course) => <StatusBadge status={course.level} />,
  },
];

const resultColumns = [
  {
    key: 'title',
    header: 'Assessment',
    render: (result) => {
      const Icon = result.type === 'Quiz' ? ListChecks : FileText;
      return (
        <div className="flex items-center gap-3">
          <span
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${TONE_CLASSES.slate.tile}`}
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="font-medium text-slate-900">{result.title}</p>
            <p className="text-xs text-slate-500">{result.type}</p>
          </div>
        </div>
      );
    },
  },
  { key: 'course', header: 'Course', render: (result) => result.course },
  { key: 'date', header: 'Date', render: (result) => formatDate(result.date) },
  {
    key: 'score',
    header: 'Score',
    render: (result) => (
      <>
        <span className="font-medium text-slate-900">
          {result.score}/{result.maxScore}
        </span>
        <span className="ml-1 text-slate-500">({result.percent}%)</span>
      </>
    ),
  },
  {
    key: 'status',
    header: 'Performance',
    render: (result) => <StatusBadge status={result.level} />,
  },
];

const COURSE_GRID =
  'xl:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.6fr)_minmax(0,1.2fr)]';
const RESULT_GRID =
  'xl:grid-cols-[minmax(0,2.4fr)_minmax(0,1.6fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.2fr)]';

function ScoreDistribution({ items }) {
  const rows = LEVELS.map((level) => ({
    level,
    count: items.filter((item) => item.level === level).length,
  }));

  return (
    <ul className="space-y-5">
      {rows.map(({ level, count }) => (
        <li key={level}>
          <div className="mb-2 flex items-baseline justify-between text-sm">
            <span className="font-medium text-slate-800">
              {STATUS_CONFIG[level].label}
              <span className="ml-2 text-xs font-normal text-slate-500">{LEVEL_RANGES[level]}</span>
            </span>
            <span className="text-slate-600">{count}</span>
          </div>
          <ProgressBar
            value={items.length === 0 ? 0 : (count / items.length) * 100}
            tone={STATUS_CONFIG[level].tone}
            size="sm"
            label={`${STATUS_CONFIG[level].label}: ${count} of ${items.length} results`}
          />
        </li>
      ))}
    </ul>
  );
}

export default function Results() {
  // Attach a percentage and performance level to every result once, up front.
  const scoredResults = results.map((result) => {
    const percent = toPercent(result.score, result.maxScore);
    return { ...result, percent, level: getPerformanceLevel(percent) };
  });

  const averageScore = averagePercent(results);
  const recentResults = scoredResults.slice(0, RECENT_COUNT);
  // The chart reads left to right, oldest to newest.
  const trendItems = [...recentResults].reverse();

  const isHandedIn = (item) => item.status === 'submitted' || item.status === 'graded';
  const completedCourses = courses.filter((course) => course.status === 'completed').length;
  const completedAssignments = assignments.filter(isHandedIn).length;
  const completedQuizzes = quizzes.filter((quiz) => quiz.status === 'completed').length;

  const courseRows = courses.map((course) => {
    const average = averagePercent(results.filter((result) => result.course === course.title));
    return {
      ...course,
      average,
      level: average === null ? 'no-data' : getPerformanceLevel(average),
      assignmentsDone: assignments.filter((a) => a.course === course.title && isHandedIn(a)).length,
      quizzesDone: quizzes.filter((q) => q.course === course.title && q.status === 'completed')
        .length,
    };
  });

  return (
    <div className="mx-auto w-full min-w-0 max-w-7xl space-y-8">
      <PageHeader
        title="Results & Performance"
        description="Your scores across assignments and quizzes, and where you are strongest."
      />

      <section aria-label="Overall performance" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Average Score"
          value={averageScore === null ? '—' : `${averageScore}%`}
          hint={`Across ${results.length} graded items`}
          icon={TrendingUp}
          tone="green"
        />
        <StatCard
          label="Courses Completed"
          value={completedCourses}
          hint={`of ${courses.length} enrolled`}
          icon={GraduationCap}
          tone="blue"
        />
        <StatCard
          label="Assignments Completed"
          value={completedAssignments}
          hint={`of ${assignments.length} total`}
          icon={ClipboardList}
          tone="blue"
        />
        <StatCard
          label="Quizzes Completed"
          value={completedQuizzes}
          hint={`of ${quizzes.length} total`}
          icon={ListChecks}
          tone="blue"
        />
      </section>

      <section>
        <SectionHeader
          title="Performance Overview"
          description="How your recent scores compare with your average."
        />
        <div className="grid gap-5 xl:grid-cols-3">
          <Card className="min-w-0 p-5 xl:col-span-2">
            <h3 className="font-semibold text-slate-900">Score trend</h3>
            <p className="mb-5 mt-0.5 text-sm text-slate-500">
              Your last {trendItems.length} graded results, oldest to newest.
            </p>
            <ScoreTrendChart items={trendItems} average={averageScore} />
          </Card>

          <Card className="p-5">
            <h3 className="font-semibold text-slate-900">Score distribution</h3>
            <p className="mb-5 mt-0.5 text-sm text-slate-500">
              How your {scoredResults.length} results are spread.
            </p>
            <ScoreDistribution items={scoredResults} />
          </Card>
        </div>
      </section>

      <section>
        <SectionHeader
          title="Course-wise Performance"
          description="Average score and progress in each course."
        />
        <Card className="overflow-hidden">
          <DataTable
            columns={courseColumns}
            rows={courseRows}
            getRowKey={(course) => course.id}
            gridClassName={COURSE_GRID}
          />
        </Card>
      </section>

      <section>
        <SectionHeader title="Recent Results" description="Your latest graded work." />
        <Card className="overflow-hidden">
          <DataTable
            columns={resultColumns}
            rows={recentResults}
            getRowKey={(result) => result.id}
            gridClassName={RESULT_GRID}
          />
        </Card>
      </section>
    </div>
  );
}