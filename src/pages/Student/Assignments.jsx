import { useMemo, useState } from 'react';
import { AlertTriangle, CheckCircle2, ClipboardList, Clock, SearchX } from 'lucide-react';
import AssignmentCard from '../../components/student/AssignmentCard';
import EmptyState from '../../components/student/EmptyState';
import FilterTabs from '../../components/student/FilterTabs';
import PageHeader from '../../components/student/PageHeader';
import SearchInput from '../../components/student/SearchInput';
import StatCard from '../../components/student/StatCard';
import { assignments } from '../../data/studentMockData';

// "Submitted" covers work that has been handed in, whether or not it is graded yet.
const isSubmitted = (assignment) =>
  assignment.status === 'submitted' || assignment.status === 'graded';

const FILTERS = [
  { value: 'all', label: 'All', matches: () => true },
  { value: 'pending', label: 'Pending', matches: (a) => a.status === 'pending' },
  { value: 'submitted', label: 'Submitted', matches: isSubmitted },
  { value: 'overdue', label: 'Overdue', matches: (a) => a.status === 'overdue' },
];

// Overdue first, then what is due next, then work that is already handed in.
const STATUS_ORDER = { overdue: 0, pending: 1, submitted: 2, graded: 3 };
const byUrgency = (a, b) =>
  STATUS_ORDER[a.status] - STATUS_ORDER[b.status] || a.dueDate.localeCompare(b.dueDate);

const counts = Object.fromEntries(
  FILTERS.map((filter) => [filter.value, assignments.filter(filter.matches).length]),
);
const gradedCount = assignments.filter((assignment) => assignment.status === 'graded').length;

const filterOptions = FILTERS.map(({ value, label }) => ({ value, label, count: counts[value] }));

export default function Assignments() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('all');

  const visibleAssignments = useMemo(() => {
    const term = query.trim().toLowerCase();
    const { matches } = FILTERS.find((option) => option.value === filter);

    return assignments
      .filter(
        (assignment) =>
          matches(assignment) &&
          (term === '' ||
            assignment.title.toLowerCase().includes(term) ||
            assignment.course.toLowerCase().includes(term)),
      )
      .sort(byUrgency);
  }, [query, filter]);

  const clearFilters = () => {
    setQuery('');
    setFilter('all');
  };

  return (
    <div className="mx-auto w-full min-w-0 max-w-7xl space-y-6">
      <PageHeader
        title="Assignments"
        description="Track what is due, what you have submitted and how your work was graded."
      />

      <section aria-label="Summary" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Total Assignments"
          value={counts.all}
          hint="Across all courses"
          icon={ClipboardList}
          tone="blue"
        />
        <StatCard
          label="Pending"
          value={counts.pending}
          hint="Not yet submitted"
          icon={Clock}
          tone="amber"
        />
        <StatCard
          label="Submitted"
          value={counts.submitted}
          hint={`${gradedCount} graded`}
          icon={CheckCircle2}
          tone="green"
        />
        <StatCard
          label="Overdue"
          value={counts.overdue}
          hint={counts.overdue > 0 ? 'Submit these as soon as you can' : 'You are on track'}
          icon={AlertTriangle}
          tone="red"
        />
      </section>

      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <SearchInput
          value={query}
          onChange={setQuery}
          placeholder="Search assignments"
          label="Search assignments by title or course"
        />
        <FilterTabs
          label="Filter assignments"
          options={filterOptions}
          value={filter}
          onChange={setFilter}
        />
      </div>

      {visibleAssignments.length > 0 ? (
        <div className="space-y-3">
          {visibleAssignments.map((assignment) => (
            <AssignmentCard key={assignment.id} assignment={assignment} />
          ))}
        </div>
      ) : (
        <EmptyState
          icon={SearchX}
          title="No assignments found"
          description="Nothing matches your search and filter. Try a different keyword, or clear the filters to see every assignment."
          actionLabel="Clear Filters"
          onAction={clearFilters}
        />
      )}
    </div>
  );
}