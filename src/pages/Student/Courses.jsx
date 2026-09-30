import { useMemo, useState } from 'react';
import { SearchX } from 'lucide-react';
import CourseCard from '../../components/student/CourseCard';
import EmptyState from '../../components/student/EmptyState';
import FilterTabs from '../../components/student/FilterTabs';
import PageHeader from '../../components/student/PageHeader';
import SearchInput from '../../components/student/SearchInput';
import { courses } from '../../data/studentMockData';

const FILTERS = [
  { value: 'all', label: 'All' },
  { value: 'in-progress', label: 'In Progress' },
  { value: 'completed', label: 'Completed' },
];

const filterOptions = FILTERS.map((filter) => ({
  ...filter,
  count:
    filter.value === 'all'
      ? courses.length
      : courses.filter((course) => course.status === filter.value).length,
}));

export default function Courses() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('all');

  const visibleCourses = useMemo(() => {
    const term = query.trim().toLowerCase();

    return courses.filter((course) => {
      const matchesFilter = filter === 'all' || course.status === filter;
      const matchesQuery =
        term === '' ||
        [course.title, course.instructor, course.category].some((field) =>
          field.toLowerCase().includes(term),
        );
      return matchesFilter && matchesQuery;
    });
  }, [query, filter]);

  const clearFilters = () => {
    setQuery('');
    setFilter('all');
  };

  return (
    <div className="mx-auto w-full min-w-0 max-w-7xl space-y-6">
      <PageHeader
        title="My Courses"
        description="All the courses you are enrolled in, with your progress and what is due in each."
      />

      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <SearchInput
          value={query}
          onChange={setQuery}
          placeholder="Search courses"
          label="Search courses by title, instructor or category"
        />
        <FilterTabs
          label="Filter courses"
          options={filterOptions}
          value={filter}
          onChange={setFilter}
        />
      </div>

      <p className="text-sm text-slate-500" aria-live="polite">
        Showing {visibleCourses.length} of {courses.length} courses
      </p>

      {visibleCourses.length > 0 ? (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visibleCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <EmptyState
          icon={SearchX}
          title="No courses found"
          description="Nothing matches your search and filter. Try a different keyword, or clear the filters to see every course."
          actionLabel="Clear Filters"
          onAction={clearFilters}
        />
      )}
    </div>
  );
}