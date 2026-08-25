import { useState, useEffect } from "react"
import { profile } from "../data/portfolio"

const links = [
  ["About", "about"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Skills", "skills"],
  ["Education", "education"],
  ["Contact", "contact"],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = links.map(([, id]) => document.getElementById(id)).filter(Boolean)
      const scrollPosition = window.scrollY + 200

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(section.id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-nav py-3 shadow-2xl shadow-black/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        {/* Brand / Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2.5 sm:gap-3 text-base sm:text-lg font-bold tracking-tight text-white transition hover:opacity-90"
        >
          <span className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 font-extrabold text-white text-sm sm:text-base shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform">
            S
          </span>
          <span className="flex items-center gap-1.5 font-semibold text-slate-100 truncate">
            {profile.name}
            <span className="h-2 w-2 shrink-0 rounded-full bg-cyan-400 animate-pulse" />
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 rounded-full border border-slate-800/80 bg-slate-900/60 p-1.5 backdrop-blur-md md:flex">
          {links.map(([label, id]) => {
            const isActive = activeSection === id
            return (
              <a
                key={id}
                href={`#${id}`}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-md shadow-indigo-500/20"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                }`}
              >
                {label}
              </a>
            )
          })}
        </nav>

        {/* Social Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-slate-800 bg-slate-900/50 px-4 py-2 text-xs font-medium text-slate-300 transition hover:border-slate-600 hover:bg-slate-800 hover:text-white"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:opacity-90"
          >
            LinkedIn
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/80 text-slate-300 transition hover:border-slate-700 hover:text-white md:hidden active:scale-95"
        >
          {open ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer & Overlay */}
      {open && (
        <>
          <div
            className="fixed inset-0 top-[60px] bg-slate-950/70 backdrop-blur-sm md:hidden z-40"
            onClick={() => setOpen(false)}
          />
          <div className="relative z-50 border-b border-slate-800/80 bg-[#050811]/95 px-6 py-6 backdrop-blur-2xl md:hidden max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="flex flex-col gap-2">
              {links.map(([label, id]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                    activeSection === id
                      ? "bg-slate-800/90 text-cyan-400 border border-slate-700/50"
                      : "text-slate-300 hover:bg-slate-900 hover:text-white"
                  }`}
                >
                  {label}
                </a>
              ))}
              <div className="mt-4 flex gap-3 pt-4 border-t border-slate-800/80">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 rounded-xl border border-slate-800 bg-slate-900/60 py-3 text-center text-xs font-medium text-slate-300 active:bg-slate-800"
                >
                  GitHub
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 py-3 text-center text-xs font-semibold text-white active:opacity-90"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  )
}