export default function ProjectCard({ project, onSelect }) {
  return (
    <article
      onClick={() => onSelect && onSelect(project)}
      className="glass-card glass-card-hover group relative flex h-full cursor-pointer flex-col rounded-3xl p-5 sm:p-7 active:scale-[0.99] transition-transform"
    >
      {/* Category & Status Header */}
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <span className="inline-block rounded-full bg-cyan-500/10 px-2.5 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-cyan-400 border border-cyan-500/20 mb-2">
            {project.category}
          </span>

          <h3 className="text-lg sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
            {project.title}
          </h3>
        </div>

        <span className="shrink-0 rounded-full border border-slate-700/80 bg-slate-900/60 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs text-slate-400 backdrop-blur-sm">
          {project.status}
        </span>
      </div>

      {/* Description */}
      <p className="mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed text-slate-300">
        {project.description}
      </p>

      {/* Tech Stack Pills */}
      <div className="mt-4 sm:mt-5 flex flex-wrap gap-1.5">
        {project.technologies.slice(0, 6).map((tech) => (
          <span
            key={tech}
            className="rounded-lg border border-slate-800 bg-slate-900/80 px-2.5 py-1 text-[11px] sm:text-xs text-slate-300"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 6 && (
          <span className="rounded-lg border border-slate-800 bg-slate-900/40 px-2 py-1 text-[11px] sm:text-xs text-slate-400">
            +{project.technologies.length - 6} more
          </span>
        )}
      </div>

      {/* Key Capabilities Preview */}
      <div className="mt-5 sm:mt-6 border-t border-slate-800/80 pt-4">
        <p className="mb-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400">
          Key Capabilities
        </p>

        <ul className="space-y-1.5">
          {project.highlights.slice(0, 3).map((item) => (
            <li key={item} className="flex items-center gap-2 text-xs text-slate-300">
              <span className="text-cyan-400 font-bold shrink-0">→</span>
              <span className="truncate">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Architecture Snippet */}
      <div className="mt-auto pt-4 sm:pt-5">
        <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-3 sm:p-3.5 group-hover:border-slate-700 transition">
          <div className="flex items-center justify-between mb-1 gap-2">
            <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-slate-500 truncate">
              Architecture Preview
            </span>
            <span className="text-[11px] sm:text-xs text-cyan-400 font-medium shrink-0 group-hover:underline">
              View Details →
            </span>
          </div>

          <p className="font-mono text-[11px] sm:text-xs text-slate-300 truncate">
            {project.architecture}
          </p>
        </div>
      </div>
    </article>
  )
}