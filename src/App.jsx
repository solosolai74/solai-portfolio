import Navbar from "./components/Navbar"
import SectionTitle from "./components/SectionTitle"
import ProjectCard from "./components/ProjectCard"
import SkillBadge from "./components/SkillBadge"

import {
  profile,
  experiences,
  projects,
  skills,
  aiConcepts,
} from "./data/portfolio"

function App() {
  return (
    <div className="min-h-screen bg-[#070b14]">

      <Navbar />

      {/* HERO */}
      <section
        id="home"
        className="grid-bg relative overflow-hidden pt-32"
      >
        <div className="mx-auto max-w-6xl px-6 pb-24 pt-16">

          <div className="max-w-4xl">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-4 py-2 text-sm text-slate-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Available for opportunities
            </div>

            <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl">
              Python Full-Stack
              <span className="block text-slate-400">
                & AI Engineer
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
              {profile.tagline}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="#projects"
                className="rounded-xl bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                View Projects
              </a>

              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-slate-500"
              >
                Download Resume
              </a>

            </div>
          </div>

          {/* Technology strip */}
          <div className="mt-20 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">

            {[
              "Python",
              "FastAPI",
              "Django",
              "React",
              "PostgreSQL",
              "LLM",
              "RAG",
              "Redis",
            ].map((tech) => (
              <div
                key={tech}
                className="rounded-xl border border-slate-800 bg-slate-900/50 px-4 py-4 text-center text-sm text-slate-300"
              >
                {tech}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-24">

        <SectionTitle
          eyebrow="About"
          title="Software engineering foundation with a growing AI focus."
          description="My core experience is in full-stack and backend engineering, with recent hands-on work focused on LLM integration, AI applications and conversational systems."
        />

        <div className="grid gap-8 md:grid-cols-3">

          <div className="glass rounded-2xl p-6">
            <p className="text-3xl font-bold text-white">4+</p>
            <p className="mt-2 text-slate-400">
              Years of professional experience
            </p>
          </div>

          <div className="glass rounded-2xl p-6">
            <p className="text-3xl font-bold text-white">Python</p>
            <p className="mt-2 text-slate-400">
              Backend & full-stack engineering
            </p>
          </div>

          <div className="glass rounded-2xl p-6">
            <p className="text-3xl font-bold text-white">AI / LLM</p>
            <p className="mt-2 text-slate-400">
              Recent hands-on specialization
            </p>
          </div>

        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="border-y border-slate-800/70 bg-slate-950/30"
      >
        <div className="mx-auto max-w-6xl px-6 py-24">

          <SectionTitle
            eyebrow="Experience"
            title="Professional experience"
            description="Building enterprise applications, APIs, automation platforms and AI-powered systems."
          />

          <div className="space-y-10">

            {experiences.map((experience) => (
              <article
                key={experience.company}
                className="relative border-l border-slate-700 pl-8"
              >

                <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-blue-400" />

                <div className="flex flex-col justify-between gap-2 md:flex-row">

                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {experience.role}
                    </h3>

                    <p className="mt-1 text-blue-400">
                      {experience.company}
                    </p>
                  </div>

                  <div className="text-sm text-slate-500">
                    {experience.period}
                  </div>

                </div>

                <p className="mt-5 max-w-4xl leading-7 text-slate-400">
                  {experience.description}
                </p>

                <ul className="mt-5 max-w-4xl space-y-3">
                  {experience.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="flex gap-3 text-sm leading-6 text-slate-400"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500" />
                      {achievement}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <SkillBadge key={tech}>
                      {tech}
                    </SkillBadge>
                  ))}
                </div>

              </article>
            ))}

          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-24">

        <SectionTitle
          eyebrow="Featured Projects"
          title="AI systems & engineering projects"
          description="Projects focused on solving real business and engineering problems using Python, AI and scalable application architecture."
        />

        <div className="grid gap-6 lg:grid-cols-2">

          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}

        </div>
      </section>

      {/* AI APPROACH */}
      <section className="border-y border-slate-800/70 bg-slate-950/30">

        <div className="mx-auto max-w-6xl px-6 py-24">

          <SectionTitle
            eyebrow="AI Engineering"
            title="How I approach AI application development"
            description="I focus on integrating AI into reliable software systems rather than treating the model as the entire application."
          />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">

            {[
              ["01", "Understand", "Business problem"],
              ["02", "Design", "AI architecture"],
              ["03", "Integrate", "Models & tools"],
              ["04", "Validate", "Output & quality"],
              ["05", "Deploy", "Production system"],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6"
              >
                <p className="text-sm text-blue-400">
                  {number}
                </p>

                <h3 className="mt-4 font-semibold text-white">
                  {title}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  {text}
                </p>
              </div>
            ))}

          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {aiConcepts.map((concept) => (
              <SkillBadge key={concept}>
                {concept}
              </SkillBadge>
            ))}
          </div>

        </div>

      </section>

      {/* SKILLS */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-24">

        <SectionTitle
          eyebrow="Technical Skills"
          title="Tools I work with"
        />

        <div className="grid gap-6 md:grid-cols-2">

          {Object.entries(skills).map(
            ([category, technologies]) => (
              <div
                key={category}
                className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6"
              >

                <h3 className="mb-5 font-semibold text-white">
                  {category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {technologies.map((technology) => (
                    <SkillBadge key={technology}>
                      {technology}
                    </SkillBadge>
                  ))}
                </div>

              </div>
            ),
          )}

        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="border-t border-slate-800/70 bg-slate-950/30"
      >
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Let's build something useful.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
            I'm interested in Python backend, full-stack and AI/LLM
            engineering opportunities where I can contribute to
            production-grade systems.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <a
              href={`mailto:${profile.email}`}
              className="rounded-xl bg-white px-6 py-3 font-semibold text-slate-950"
            >
              Email Me
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-200"
            >
              LinkedIn
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-200"
            >
              GitHub
            </a>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800/70">

        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 px-6 py-8 text-sm text-slate-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>

          <p>
            Python Full-Stack & AI Engineer
          </p>

        </div>

      </footer>

    </div>
  )
}

export default App