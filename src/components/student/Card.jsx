// Base surface used by every panel and card so borders and radius stay uniform.
export default function Card({ className = '', children }) {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white ${className}`}>{children}</div>
  );
}
