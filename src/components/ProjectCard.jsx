export default function ProjectCard({ project }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition duration-300 hover:-translate-y-1 hover:border-slate-600 hover:bg-slate-900/70">

      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-400">
            {project.category}
          </p>

          <h3 className="text-xl font-semibold text-white">
            {project.title}
          </h3>
        </div>

        <span className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-400">
          {project.status}
        </span>
      </div>

      <p className="mt-5 leading-7 text-slate-400">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-slate-800 px-2.5 py-1 text-xs text-slate-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 border-t border-slate-800 pt-5">
        <p className="mb-3 text-sm font-medium text-slate-200">
          Key capabilities
        </p>

        <ul className="space-y-2">
          {project.highlights.map((item) => (
            <li
              key={item}
              className="flex gap-2 text-sm text-slate-400"
            >
              <span className="text-blue-400">→</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-6">
        <div className="rounded-xl bg-slate-950/80 p-4">
          <p className="mb-2 text-xs uppercase tracking-wider text-slate-500">
            Architecture
          </p>

          <p className="text-xs leading-6 text-slate-300">
            {project.architecture}
          </p>
        </div>
      </div>
    </article>
  )
}