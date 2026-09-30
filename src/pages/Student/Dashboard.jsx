import {
  Award,
  BookOpen,
  CheckCircle2,
  ClipboardList,
  ListChecks,
  Send,
  TrendingUp,
} from 'lucide-react';
import AssignmentCard from '../../components/student/AssignmentCard';
import Card from '../../components/student/Card';
import CourseCard from '../../components/student/CourseCard';
import EmptyState from '../../components/student/EmptyState';
import PageHeader from '../../components/student/PageHeader';
import SectionHeader from '../../components/student/SectionHeader';
import StatCard from '../../components/student/StatCard';
import { TONE_CLASSES } from '../../components/student/statusConfig';
import {
  activities,
  announcements,
  assignments,
  courses,
  quizzes,
  results,
} from '../../data/studentMockData';
import { formatDate } from '../../utils/format';
import { averagePercent } from '../../utils/scoring';
import { studentRoutes } from '../../utils/studentRoutes';

const ACTIVITY_STYLES = {
  lesson: { icon: BookOpen, tone: 'blue' },
  submission: { icon: Send, tone: 'blue' },
  quiz: { icon: ListChecks, tone: 'green' },
  grade: { icon: Award, tone: 'green' },
};

function ActivityItem({ activity }) {
  const { icon: Icon, tone } = ACTIVITY_STYLES[activity.type];

  return (
    <li className="flex items-start gap-3 px-4 py-4 sm:px-5">
      <span
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${TONE_CLASSES[tone].tile}`}
      >
        <Icon className="h-4 w-4" aria-hidden="true" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-slate-900">{activity.message}</p>
        <p className="mt-0.5 text-sm text-slate-500">{activity.course}</p>
      </div>
      <span className="shrink-0 text-xs text-slate-500">{activity.time}</span>
    </li>
  );
}

function AnnouncementItem({ announcement }) {
  return (
    <li className="px-4 py-4 sm:px-5">
      <h3 className="text-sm font-semibold text-slate-900">{announcement.title}</h3>
      <p className="mt-1 text-sm leading-relaxed text-slate-600">{announcement.message}</p>
      <div className="mt-3 flex items-center justify-between gap-3 text-xs text-slate-500">
        <span className="truncate">{announcement.author}</span>
        <time dateTime={announcement.date} className="shrink-0">
          {formatDate(announcement.date)}
        </time>
      </div>
    </li>
  );
}

const byDueDate = (a, b) => a.dueDate.localeCompare(b.dueDate);

export default function Dashboard() {
  const inProgressCourses = courses.filter((course) => course.status === 'in-progress');

  // Overdue work sorts to the top naturally because its due date is earliest.
  const needsAttention = assignments
    .filter((assignment) => assignment.status === 'pending' || assignment.status === 'overdue')
    .sort(byDueDate);
  const pendingCount = assignments.filter((assignment) => assignment.status === 'pending').length;
  const overdueCount = assignments.filter((assignment) => assignment.status === 'overdue').length;

  const upcomingQuizzes = quizzes.filter((quiz) => quiz.status === 'upcoming').sort(byDueDate);
  const averageScore = averagePercent(results);

  return (
    <div className="mx-auto w-full min-w-0 max-w-7xl space-y-8">
      <PageHeader
        title="Welcome back, Anurag"
        description="Here's what's happening with your learning today."
      />

      <section aria-label="Summary" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Enrolled Courses"
          value={courses.length}
          hint={`${inProgressCourses.length} in progress`}
          icon={BookOpen}
          tone="blue"
        />
        <StatCard
          label="Pending Assignments"
          value={pendingCount}
          hint={overdueCount > 0 ? `${overdueCount} overdue` : 'Nothing overdue'}
          icon={ClipboardList}
          tone="amber"
        />
        <StatCard
          label="Upcoming Quizzes"
          value={upcomingQuizzes.length}
          hint={
            upcomingQuizzes.length > 0
              ? `Next due ${formatDate(upcomingQuizzes[0].dueDate)}`
              : 'Nothing scheduled'
          }
          icon={ListChecks}
          tone="blue"
        />
        <StatCard
          label="Average Score"
          value={averageScore === null ? '—' : `${averageScore}%`}
          hint={`Across ${results.length} graded items`}
          icon={TrendingUp}
          tone="green"
        />
      </section>

      <section>
        <SectionHeader
          title="Continue Learning"
          description="Pick up where you left off."
          linkTo={studentRoutes.courses}
          linkLabel="View all courses"
        />
        <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-4">
          {inProgressCourses.slice(0, 4).map((course) => (
            <CourseCard key={course.id} course={course} variant="compact" />
          ))}
        </div>
      </section>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="min-w-0 space-y-8 xl:col-span-2">
          <section>
            <SectionHeader
              title="Upcoming Assignments"
              description="Overdue and upcoming work, soonest first."
              linkTo={studentRoutes.assignments}
              linkLabel="View all assignments"
            />
            {needsAttention.length > 0 ? (
              <div className="space-y-3">
                {needsAttention.slice(0, 4).map((assignment) => (
                  <AssignmentCard key={assignment.id} assignment={assignment} variant="compact" />
                ))}
              </div>
            ) : (
              <EmptyState
                icon={CheckCircle2}
                title="You are all caught up"
                description="No assignments are waiting on you right now."
              />
            )}
          </section>

          <section>
            <SectionHeader title="Recent Activity" />
            <Card>
              <ul className="divide-y divide-slate-100">
                {activities.map((activity) => (
                  <ActivityItem key={activity.id} activity={activity} />
                ))}
              </ul>
            </Card>
          </section>
        </div>

        <section className="min-w-0">
          <SectionHeader title="Announcements" />
          <Card>
            <ul className="divide-y divide-slate-100">
              {announcements.map((announcement) => (
                <AnnouncementItem key={announcement.id} announcement={announcement} />
              ))}
            </ul>
          </Card>
        </section>
      </div>
    </div>
  );
}