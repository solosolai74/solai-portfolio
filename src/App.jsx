import { useState } from "react"
import Navbar from "./components/Navbar"
import SectionTitle from "./components/SectionTitle"
import ProjectCard from "./components/ProjectCard"
import ProjectModal from "./components/ProjectModal"
import SkillBadge from "./components/SkillBadge"
import BackgroundGlow from "./components/BackgroundGlow"
import EducationCertifications from "./components/EducationCertifications"

import {
  profile,
  experiences,
  projects,
  skills,
  aiConcepts,
} from "./data/portfolio"

function App() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeCategory, setActiveCategory] = useState("All")
  const [copiedEmail, setCopiedEmail] = useState(false)

  const categories = [
    "All",
    "AI / Engineering Automation",
    "Full-Stack / FinTech",
    "Enterprise Application",
    "Enterprise / Monitoring",
  ]

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category.includes(activeCategory) || p.category === activeCategory)

  const handleCopyEmail = () => {
    if (profile.email) {
      navigator.clipboard.writeText(profile.email)
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2500)
    }
  }

  return (
    <div className="relative min-h-screen bg-[#050811] text-slate-100 selection:bg-indigo-500/30 selection:text-white">
      {/* Background Lighting & Mesh */}
      <BackgroundGlow />

      {/* Header Navbar */}
      <Navbar />

      {/* ============================================================ */}
      {/* HERO SECTION */}
      {/* ============================================================ */}
      <section
        id="home"
        className="relative z-10 pt-28 sm:pt-44 pb-16 sm:pb-20 overflow-hidden"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-4xl">
            {/* Status Pill */}
            <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 sm:gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-semibold text-emerald-300 shadow-lg shadow-emerald-500/10 backdrop-blur-md">
              <span className="relative flex h-2 sm:h-2.5 w-2 sm:w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 sm:h-2.5 w-2 sm:w-2.5 bg-emerald-400"></span>
              </span>
              {profile.availability}
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.15] sm:leading-[1.1]">
              Python Full-Stack
              <span className="block gradient-text mt-1">
                & AI Engineer
              </span>
            </h1>

            {/* Tagline */}
            <p className="mt-4 sm:mt-6 max-w-2xl text-sm sm:text-lg leading-relaxed text-slate-300">
              {profile.tagline}
            </p>

            {/* Location Badge */}
            <div className="mt-3 sm:mt-4 flex items-center gap-2 text-xs font-medium text-slate-400">
              <svg className="h-4 w-4 text-cyan-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{profile.location}</span>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href="#projects"
                className="w-full sm:w-auto text-center rounded-2xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-indigo-500/25 transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/40 active:scale-95"
              >
                View Projects →
              </a>

              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto text-center rounded-2xl border border-slate-700/80 bg-slate-900/60 px-6 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-md transition-all duration-300 hover:border-slate-500 hover:bg-slate-800 active:scale-95"
              >
                Download Resume
              </a>

              <button
                onClick={handleCopyEmail}
                className="w-full sm:w-auto text-center relative rounded-2xl border border-slate-800 bg-slate-900/40 px-5 py-3.5 text-sm font-medium text-slate-300 transition-all hover:border-slate-600 hover:text-white active:scale-95"
              >
                {copiedEmail ? "✓ Email Copied!" : "Copy Email"}
              </button>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-4">
            <div className="glass-card rounded-2xl p-4 sm:p-5 border border-slate-800/80">
              <p className="text-2xl sm:text-3xl font-extrabold text-white">4+</p>
              <p className="mt-1 text-[11px] sm:text-xs text-slate-400 font-medium leading-tight">Years Professional Experience</p>
            </div>

            <div className="glass-card rounded-2xl p-4 sm:p-5 border border-slate-800/80">
              <p className="text-2xl sm:text-3xl font-extrabold text-cyan-400">8+</p>
              <p className="mt-1 text-[11px] sm:text-xs text-slate-400 font-medium leading-tight">Enterprise & AI Systems Built</p>
            </div>

            <div className="glass-card rounded-2xl p-4 sm:p-5 border border-slate-800/80">
              <p className="text-2xl sm:text-3xl font-extrabold text-indigo-400">LLM & RAG</p>
              <p className="mt-1 text-[11px] sm:text-xs text-slate-400 font-medium leading-tight">AI Specialization</p>
            </div>

            <div className="glass-card rounded-2xl p-4 sm:p-5 border border-slate-800/80">
              <p className="text-2xl sm:text-3xl font-extrabold text-purple-400">REST APIs</p>
              <p className="mt-1 text-[11px] sm:text-xs text-slate-400 font-medium leading-tight">Scalable Backend Design</p>
            </div>
          </div>

          {/* Core Tech Stack Bar */}
          <div className="mt-10 sm:mt-12">
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 sm:mb-4">
              Core Tech Stack & Tools
            </p>
            <div className="flex overflow-x-auto no-scrollbar flex-nowrap sm:flex-wrap gap-2 sm:gap-2.5 pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
              {[
                "Python",
                "FastAPI",
                "Django",
                "React",
                "PostgreSQL",
                "LLM & RAG",
                "LangChain",
                "Redis",
                "Angular",
                "Docker",
              ].map((tech) => (
                <span
                  key={tech}
                  className="shrink-0 rounded-xl border border-slate-800 bg-slate-900/60 px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-medium text-slate-300 backdrop-blur-md hover:border-cyan-500/40 hover:text-cyan-300 transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* ABOUT SECTION */}
      {/* ============================================================ */}
      <section id="about" className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <SectionTitle
          eyebrow="About Me"
          title="Software engineering foundation with specialized AI expertise."
          description="My core experience spans full-stack and backend engineering across enterprise web apps, financial processing engines, and conversational AI/LLM integration."
        />

        <div className="grid gap-6 md:grid-cols-3">
          <div className="glass-card glass-card-hover rounded-3xl p-7 relative overflow-hidden">
            <div className="h-10 w-10 flex items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 mb-4 font-bold border border-cyan-500/20">
              01
            </div>
            <h3 className="text-lg font-bold text-white">Full-Stack Architecture</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-400">
              Designing scalable REST APIs using FastAPI & Django, combined with reactive frontend interfaces in React and Angular.
            </p>
          </div>

          <div className="glass-card glass-card-hover rounded-3xl p-7 relative overflow-hidden">
            <div className="h-10 w-10 flex items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400 mb-4 font-bold border border-indigo-500/20">
              02
            </div>
            <h3 className="text-lg font-bold text-white">LLM & GenAI Integration</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-400">
              Building RAG pipelines, prompt engineering, open-source model deployment, vector search, and structured AI output generation.
            </p>
          </div>

          <div className="glass-card glass-card-hover rounded-3xl p-7 relative overflow-hidden">
            <div className="h-10 w-10 flex items-center justify-center rounded-2xl bg-purple-500/10 text-purple-400 mb-4 font-bold border border-purple-500/20">
              03
            </div>
            <h3 className="text-lg font-bold text-white">Enterprise & Security</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-400">
              Role-based access control (RBAC), database schema optimization, financial data reconciliation, and CERT-In security compliance.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* EXPERIENCE TIMELINE SECTION */}
      {/* ============================================================ */}
      <section
        id="experience"
        className="relative z-10 border-y border-slate-800/80 bg-slate-950/40 py-16 sm:py-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionTitle
            eyebrow="Career Progression"
            title="Professional Work Experience"
            description="Building enterprise platforms, financial engines, security-audited applications, and AI integrations."
          />

          <div className="relative border-l-2 border-slate-800/80 ml-3 sm:ml-6 space-y-8 sm:space-y-12 pl-5 sm:pl-10">
            {experiences.map((exp) => (
              <div key={exp.company + exp.role} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[27px] sm:-left-[47px] top-1.5 h-4 w-4 rounded-full border-2 border-indigo-400 bg-slate-950 group-hover:bg-cyan-400 group-hover:scale-125 transition-all shadow-md shadow-indigo-500/40" />

                <div className="glass-card glass-card-hover rounded-3xl p-5 sm:p-8">
                  {/* Role Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-cyan-400 mt-0.5">
                        {exp.company} <span className="text-slate-500 font-normal">({exp.location})</span>
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 mt-1 sm:mt-0">
                      {exp.promotion && (
                        <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-[11px] font-semibold text-emerald-400 border border-emerald-500/20">
                          {exp.promotion}
                        </span>
                      )}
                      <span className="rounded-full border border-slate-800 bg-slate-900/80 px-3 py-0.5 sm:px-3.5 sm:py-1 text-[11px] sm:text-xs text-slate-400 font-mono">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Summary Description */}
                  <p className="mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed text-slate-300">
                    {exp.description}
                  </p>

                  {/* Key Achievements Bullet List */}
                  <ul className="mt-4 sm:mt-5 space-y-2">
                    {exp.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-slate-300"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack Pills */}
                  <div className="mt-5 sm:mt-6 flex flex-wrap gap-1.5 sm:gap-2 pt-4 border-t border-slate-800/80">
                    {exp.technologies.map((tech) => (
                      <SkillBadge key={tech}>{tech}</SkillBadge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FEATURED PROJECTS SECTION */}
      {/* ============================================================ */}
      <section id="projects" className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
        <SectionTitle
          eyebrow="Portfolio & Systems"
          title="Featured Projects & Architectures"
          description="Click any project card to inspect full system architecture flows, tech stacks, and engineering details."
        />

        {/* Category Filter Tabs */}
        <div className="mb-8 sm:mb-10 flex overflow-x-auto no-scrollbar flex-nowrap sm:flex-wrap gap-2 pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 rounded-xl px-3.5 sm:px-4 py-2 text-xs font-semibold transition-all duration-200 active:scale-95 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-cyan-500 to-indigo-500 text-white shadow-lg shadow-cyan-500/20"
                  : "border border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700 hover:text-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* AI ENGINEERING APPROACH */}
      {/* ============================================================ */}
      <section className="relative z-10 border-y border-slate-800/80 bg-slate-950/40 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            eyebrow="Methodology"
            title="AI Application Development Approach"
            description="I focus on integrating AI models into reliable, production-grade software applications with strict validation and security."
          />

          {/* Workflow Steps */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              ["01", "Understand", "Business & domain requirements"],
              ["02", "Design", "Modular AI & backend architecture"],
              ["03", "Integrate", "LLMs, RAG, tool calling & APIs"],
              ["04", "Validate", "Output quality, fallback & guardrails"],
              ["05", "Deploy", "Containerized production deployment"],
            ].map(([num, title, desc]) => (
              <div
                key={num}
                className="glass-card glass-card-hover rounded-2xl p-5 border border-slate-800/80 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-cyan-400 font-mono">
                    {num}
                  </span>
                  <h3 className="mt-2 text-base font-bold text-white">
                    {title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* AI Concepts Pills */}
          <div className="mt-10 pt-6 border-t border-slate-800/80">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
              AI / GenAI Core Concepts Handled
            </p>
            <div className="flex flex-wrap gap-2">
              {aiConcepts.map((concept) => (
                <SkillBadge key={concept} variant="accent">
                  {concept}
                </SkillBadge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SKILLS SECTION */}
      {/* ============================================================ */}
      <section id="skills" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <SectionTitle
          eyebrow="Technical Stack"
          title="Skills & Technologies"
          description="Core languages, frameworks, databases, and DevOps tools used across backend and full-stack projects."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="glass-card glass-card-hover rounded-3xl p-6"
            >
              <h3 className="text-base font-bold text-white mb-4 flex items-center justify-between border-b border-slate-800 pb-3">
                <span>{category}</span>
                <span className="h-2 w-2 rounded-full bg-indigo-400" />
              </h3>

              <div className="flex flex-wrap gap-1.5">
                {items.map((item) => (
                  <SkillBadge key={item}>{item}</SkillBadge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* EDUCATION & CERTIFICATIONS */}
      {/* ============================================================ */}
      <div className="relative z-10 border-t border-slate-800/80 bg-slate-950/30">
        <EducationCertifications />
      </div>

      {/* ============================================================ */}
      {/* CONTACT SECTION */}
      {/* ============================================================ */}
      <section
        id="contact"
        className="relative z-10 border-t border-slate-800/80 bg-slate-950/60 py-16 sm:py-24"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <span className="inline-block rounded-full bg-cyan-500/10 px-3.5 sm:px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-300 border border-cyan-500/20 mb-4">
            Get In Touch
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Let's build reliable software & AI systems together.
          </h2>

          <p className="mx-auto mt-4 sm:mt-5 max-w-2xl text-sm sm:text-base text-slate-300 leading-relaxed">
            I'm open to Python Full-Stack, Backend, and AI Engineer opportunities. Feel free to reach out directly via email or LinkedIn!
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="w-full sm:w-auto text-center rounded-2xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-indigo-500/25 transition-all hover:scale-105 active:scale-95"
            >
              Email Me
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto text-center rounded-2xl border border-slate-700 bg-slate-900/60 px-7 py-4 text-sm font-semibold text-slate-200 hover:border-slate-500 transition active:scale-95"
            >
              LinkedIn Profile
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto text-center rounded-2xl border border-slate-700 bg-slate-900/60 px-7 py-4 text-sm font-semibold text-slate-200 hover:border-slate-500 transition active:scale-95"
            >
              GitHub Repository
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FOOTER */}
      {/* ============================================================ */}
      <footer className="relative z-10 border-t border-slate-800/80 py-8 text-xs text-slate-500">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 sm:px-6 text-center sm:text-left sm:flex-row">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p className="text-slate-400">Python Full-Stack & AI Engineer • {profile.location}</p>
        </div>
      </footer>

      {/* Project Architecture Modal Overlay */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  )
}

export default App