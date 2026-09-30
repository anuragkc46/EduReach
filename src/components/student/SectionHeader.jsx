import { Link } from 'react-router-dom';

export default function SectionHeader({ title, description, linkTo, linkLabel }) {
  return (
    <div className="mb-4 flex items-end justify-between gap-4">
      <div>
        <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
        {description && <p className="mt-0.5 text-sm text-slate-500">{description}</p>}
      </div>
      {linkTo && (
        <Link
          to={linkTo}
          className="shrink-0 rounded text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          {linkLabel}
        </Link>
      )}
    </div>
  );
}
