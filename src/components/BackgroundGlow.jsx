export default function BackgroundGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Top Left Indigo Glow */}
      <div className="animate-pulse-glow absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-indigo-600/15 blur-[120px]" />

      {/* Top Right Cyan Glow */}
      <div className="animate-pulse-glow absolute top-1/4 -right-40 h-[550px] w-[550px] rounded-full bg-cyan-500/15 blur-[140px]" />

      {/* Middle Left Purple Glow */}
      <div className="animate-pulse-glow absolute top-1/2 -left-20 h-[600px] w-[600px] rounded-full bg-purple-600/10 blur-[150px]" />

      {/* Bottom Right Emerald/Blue Glow */}
      <div className="animate-pulse-glow absolute -bottom-20 right-10 h-[500px] w-[500px] rounded-full bg-blue-600/15 blur-[130px]" />

      {/* Grid Pattern Overlay */}
      <div className="grid-bg absolute inset-0 opacity-40" />
    </div>
  )
}
