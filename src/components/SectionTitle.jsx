export default function SectionTitle({ eyebrow, title, description, align = "left" }) {
  return (
    <div className={`mb-14 ${align === "center" ? "mx-auto text-center max-w-3xl" : "max-w-3xl"}`}>
      {eyebrow && (
        <div className={`mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-300 shadow-sm shadow-cyan-500/10 ${align === "center" ? "mx-auto" : ""}`}>
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
          {eyebrow}
        </div>
      )}

      <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-400">
          {description}
        </p>
      )}
    </div>
  )
}