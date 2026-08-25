export default function ProjectCard({ project, onSelect }) {
  return (
    <article
      onClick={() => onSelect && onSelect(project)}
      className="glass-card glass-card-hover group relative flex h-full cursor-pointer flex-col rounded-3xl p-6 sm:p-7"
    >
      {/* Category & Status Header */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="inline-block rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-400 border border-cyan-500/20 mb-2">
            {project.category}
          </span>

          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
            {project.title}
          </h3>
        </div>

        <span className="shrink-0 rounded-full border border-slate-700/80 bg-slate-900/60 px-3 py-1 text-xs text-slate-400 backdrop-blur-sm">
          {project.status}
        </span>
      </div>

      {/* Description */}
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        {project.description}
      </p>

      {/* Tech Stack Pills */}
      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.technologies.slice(0, 6).map((tech) => (
          <span
            key={tech}
            className="rounded-lg border border-slate-800 bg-slate-900/80 px-2.5 py-1 text-xs text-slate-300"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 6 && (
          <span className="rounded-lg border border-slate-800 bg-slate-900/40 px-2 py-1 text-xs text-slate-400">
            +{project.technologies.length - 6} more
          </span>
        )}
      </div>

      {/* Key Capabilities Preview */}
      <div className="mt-6 border-t border-slate-800/80 pt-4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
          Key Capabilities
        </p>

        <ul className="space-y-1.5">
          {project.highlights.slice(0, 3).map((item) => (
            <li key={item} className="flex items-center gap-2 text-xs text-slate-300">
              <span className="text-cyan-400 font-bold">→</span>
              <span className="truncate">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Architecture Snippet */}
      <div className="mt-auto pt-5">
        <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-3.5 group-hover:border-slate-700 transition">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
              Architecture Preview
            </span>
            <span className="text-xs text-cyan-400 font-medium group-hover:underline">
              View Architecture & Details →
            </span>
          </div>

          <p className="font-mono text-xs text-slate-300 truncate">
            {project.architecture}
          </p>
        </div>
      </div>
    </article>
  )
}