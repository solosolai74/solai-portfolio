import { useState } from "react"

const links = [
  ["About", "about"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Skills", "skills"],
  ["Contact", "contact"],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-800/70 bg-[#070b14]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        <a
          href="#home"
          className="text-lg font-bold tracking-tight text-white"
        >
          Solairaj S
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-sm text-slate-400 transition hover:text-white"
            >
              {label}
            </a>
          ))}

          <a
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-200 transition hover:border-slate-500"
          >
            GitHub
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-slate-300 md:hidden"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-800 bg-[#070b14] px-6 py-4 md:hidden">
          {links.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className="block py-3 text-slate-300"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}