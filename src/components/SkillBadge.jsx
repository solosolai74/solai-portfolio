export default function SkillBadge({ children }) {
  return (
    <span className="rounded-lg border border-slate-700/80 bg-slate-900/70 px-3 py-2 text-sm text-slate-300">
      {children}
    </span>
  )
}