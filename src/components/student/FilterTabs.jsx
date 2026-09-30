// Segmented filter control. `options` is [{ value, label, count? }].
export default function FilterTabs({ options, value, onChange, label }) {
  return (
    <div
      role="group"
      aria-label={label}
      className="flex w-fit min-w-0 max-w-full shrink-0 gap-1 overflow-x-auto rounded-lg bg-slate-100 p-1"
    >
      {options.map((option) => {
        const isActive = option.value === value;

        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(option.value)}
            className={`flex items-center gap-2 whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
              isActive
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:bg-white/60 hover:text-slate-900'
            }`}
          >
            {option.label}
            {option.count !== undefined && (
              <span
                className={`hidden rounded-full px-1.5 text-xs sm:inline ${
                  isActive ? 'bg-blue-50 text-blue-700' : 'bg-slate-200 text-slate-600'
                }`}
              >
                {option.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
