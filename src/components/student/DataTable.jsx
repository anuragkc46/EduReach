// Table on wide screens, stacked labelled cards on smaller ones. One markup
// path serves both, so there is no duplicated (hidden) content.
//
// columns:      [{ key, header, render(row), wide? }]
//               The first column is the row's title; `wide` makes a column span
//               the full width of the card on mobile.
// gridClassName: the wide-screen column template, e.g.
//               'xl:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]'. Pass it as a
//               literal string so Tailwind can see it.
export default function DataTable({ columns, rows, getRowKey, gridClassName }) {
  return (
    <div>
      <div
        aria-hidden="true"
        className={`hidden gap-4 border-b border-slate-200 bg-slate-50 px-5 py-3 text-xs font-medium text-slate-500 xl:grid ${gridClassName}`}
      >
        {columns.map((column) => (
          <div key={column.key}>{column.header}</div>
        ))}
      </div>

      <ul className="divide-y divide-slate-100">
        {rows.map((row) => (
          <li
            key={getRowKey(row)}
            className={`grid grid-cols-2 gap-x-4 gap-y-3 px-4 py-4 sm:px-5 xl:items-center ${gridClassName}`}
          >
            {columns.map((column, index) => (
              <div
                key={column.key}
                className={`min-w-0 text-sm text-slate-700 ${
                  index === 0 || column.wide ? 'col-span-2 xl:col-span-1' : ''
                }`}
              >
                {/* Mobile label; on wide screens the header row above takes over. */}
                <span
                  className={`mb-1 block text-xs text-slate-500 ${
                    index === 0 ? 'sr-only' : 'xl:sr-only'
                  }`}
                >
                  {column.header}
                </span>
                {column.render(row)}
              </div>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}
