import { useState } from 'react';
import { Award, CalendarClock, CheckCircle2, ListChecks, SearchX } from 'lucide-react';
import Card from '../../components/student/Card';
import EmptyState from '../../components/student/EmptyState';
import FilterTabs from '../../components/student/FilterTabs';
import PageHeader from '../../components/student/PageHeader';
import QuizCard from '../../components/student/QuizCard';
import SectionHeader from '../../components/student/SectionHeader';
import StatCard from '../../components/student/StatCard';
import { quizzes } from '../../data/studentMockData';
import { averagePercent } from '../../utils/scoring';

const upcomingQuizzes = quizzes.filter((quiz) => quiz.status === 'upcoming');
const completedQuizzes = quizzes.filter((quiz) => quiz.status === 'completed');
const averageScore = averagePercent(completedQuizzes);

const filterOptions = [
  { value: 'all', label: 'All', count: quizzes.length },
  { value: 'upcoming', label: 'Upcoming', count: upcomingQuizzes.length },
  { value: 'completed', label: 'Completed', count: completedQuizzes.length },
];

const EMPTY_MESSAGES = {
  upcoming: 'You have no quizzes scheduled. New quizzes will appear here when your instructors add them.',
  completed: 'Once you finish a quiz, your score and result will show up here.',
  all: 'Quizzes from your courses will appear here.',
};

export default function Quizzes() {
  const [filter, setFilter] = useState('all');

  const visibleQuizzes = filter === 'all' ? quizzes : quizzes.filter((quiz) => quiz.status === filter);

  return (
    <div className="mx-auto w-full min-w-0 max-w-7xl space-y-8">
      <PageHeader
        title="Quizzes"
        description="See which quizzes are coming up, start an attempt, and review your past scores."
      />

      <section aria-label="Summary" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Total Quizzes"
          value={quizzes.length}
          hint="Across all courses"
          icon={ListChecks}
          tone="blue"
        />
        <StatCard
          label="Upcoming"
          value={upcomingQuizzes.length}
          hint="Waiting to be attempted"
          icon={CalendarClock}
          tone="amber"
        />
        <StatCard
          label="Completed"
          value={completedQuizzes.length}
          hint="Attempted and scored"
          icon={CheckCircle2}
          tone="green"
        />
        <StatCard
          label="Average Score"
          value={averageScore === null ? '—' : `${averageScore}%`}
          hint="Across completed quizzes"
          icon={Award}
          tone="blue"
        />
      </section>

      {upcomingQuizzes.length > 0 && (
        <section>
          <SectionHeader
            title="Upcoming Quizzes"
            description="Start these before their due dates."
          />
          <Card>
            <ul className="divide-y divide-slate-100">
              {upcomingQuizzes.slice(0, 3).map((quiz) => (
                <li key={quiz.id}>
                  <QuizCard quiz={quiz} variant="row" />
                </li>
              ))}
            </ul>
          </Card>
        </section>
      )}

      <section className="space-y-5">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">All Quizzes</h2>
            <p className="mt-0.5 text-sm text-slate-500">Filter by attempt status.</p>
          </div>
          <FilterTabs
            label="Filter quizzes"
            options={filterOptions}
            value={filter}
            onChange={setFilter}
          />
        </div>

        {visibleQuizzes.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {visibleQuizzes.map((quiz) => (
              <QuizCard key={quiz.id} quiz={quiz} />
            ))}
          </div>
        ) : (
          <EmptyState icon={SearchX} title="No quizzes here" description={EMPTY_MESSAGES[filter]} />
        )}
      </section>
    </div>
  );
}