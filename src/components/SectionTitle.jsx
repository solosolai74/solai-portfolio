export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-slate-400 leading-7">
          {description}
        </p>
      )}
    </div>
  )
}