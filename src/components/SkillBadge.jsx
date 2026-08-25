export default function SkillBadge({ children, variant = "default" }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-1.5 text-xs font-medium transition-all duration-200 hover:scale-[1.03] ${
        variant === "accent"
          ? "border-cyan-500/40 bg-cyan-500/10 text-cyan-200 shadow-sm shadow-cyan-500/10 hover:border-cyan-400"
          : "border-slate-800 bg-slate-900/60 text-slate-300 backdrop-blur-sm hover:border-indigo-500/40 hover:bg-slate-800/80 hover:text-white"
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-indigo-400/80" />
      {children}
    </span>
  )
}