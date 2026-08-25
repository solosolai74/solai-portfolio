import SectionTitle from "./SectionTitle"
import { education, certifications } from "../data/portfolio"

export default function EducationCertifications() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-24">
      <SectionTitle
        eyebrow="Background & Credentials"
        title="Education & Certifications"
        description="Formal academic training in Computer Science Engineering alongside security and technical certifications."
      />

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Education Column */}
        <div className="space-y-6">
          <h3 className="flex items-center gap-2 text-xl font-bold text-white">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-sm">
              🎓
            </span>
            Education
          </h3>

          <div className="space-y-4">
            {education.map((item) => (
              <div
                key={item.degree}
                className="glass-card glass-card-hover rounded-2xl p-6 relative overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h4 className="text-lg font-semibold text-white">
                    {item.degree}
                  </h4>
                  <span className="inline-block shrink-0 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-300">
                    {item.result}
                  </span>
                </div>

                <p className="mt-2 font-medium text-cyan-400 text-sm">
                  {item.institution}
                </p>

                {item.university && (
                  <p className="text-xs text-slate-400 mt-1">
                    {item.university}
                  </p>
                )}

                <div className="mt-4 flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-800/80">
                  <span>{item.location}</span>
                  <span>{item.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Column */}
        <div className="space-y-6">
          <h3 className="flex items-center gap-2 text-xl font-bold text-white">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 text-sm">
              📜
            </span>
            Certifications & Training
          </h3>

          <div className="grid gap-4 sm:grid-cols-2">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="glass-card glass-card-hover rounded-2xl p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      {cert.issuer}
                    </span>
                  </div>

                  <h4 className="text-base font-semibold text-white">
                    {cert.title}
                  </h4>

                  {cert.description && (
                    <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                      {cert.description}
                    </p>
                  )}
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-cyan-400">
                  <span>Certified</span>
                  <span>Verified ✓</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
