import { useEffect } from "react"

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose()
    }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      document.body.style.overflow = "auto"
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [onClose])

  if (!project) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-2xl rounded-3xl border border-slate-700/80 bg-slate-900/95 p-6 sm:p-8 shadow-2xl shadow-cyan-500/10 z-10 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-800/80 text-slate-400 hover:border-slate-500 hover:text-white transition"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Header */}
        <div className="pr-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-block rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-400 border border-cyan-500/20">
              {project.category}
            </span>
            <span className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-400">
              {project.status}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            {project.title}
          </h3>
        </div>

        {/* Overview */}
        <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-300">
          {project.description}
        </p>

        {/* System Architecture Diagram / Flow */}
        <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/90 p-4 sm:p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              System Architecture & Data Flow
            </p>
          </div>
          <div className="rounded-xl border border-indigo-500/20 bg-indigo-950/30 p-3 sm:p-4 text-xs sm:text-sm font-mono text-cyan-300 leading-relaxed overflow-x-auto">
            {project.architecture}
          </div>
        </div>

        {/* Highlights / Features */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-slate-200 mb-3 uppercase tracking-wider">
            Key Engineering Capabilities
          </h4>
          <ul className="grid gap-2.5 sm:grid-cols-2">
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 bg-slate-800/40 rounded-xl p-3 border border-slate-800"
              >
                <span className="text-cyan-400 font-bold">✓</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Pills */}
        <div className="mt-6 pt-5 border-t border-slate-800">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
            Technologies & Tools Used
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-xl border border-slate-700/80 bg-slate-800/80 px-3 py-1.5 text-xs text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-8 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-xl bg-slate-800 px-5 py-2.5 text-xs font-semibold text-slate-200 hover:bg-slate-700 transition"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  )
}
