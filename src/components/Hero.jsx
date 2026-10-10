import { motion } from 'framer-motion'
import { btnPrimary, btnGhost } from './ui'

function Artwork() {
  return (
    <svg viewBox="0 0 400 400" role="img" aria-label="Abstract geometric artwork of rotating rings around a code window" className="w-full max-w-md">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#8087ff" /><stop offset="1" stopColor="#8087ff" stopOpacity=".1" /></linearGradient>
      </defs>
      <g className="spin"><circle cx="200" cy="200" r="185" fill="none" stroke="#262631" /><circle cx="200" cy="15" r="6" fill="#8087ff" /></g>
      <g className="spin-rev"><rect x="60" y="60" width="280" height="280" rx="40" fill="none" stroke="url(#g)" strokeWidth="1.5" /><circle cx="60" cy="200" r="4" fill="#ecebe6" /></g>
      <rect x="110" y="130" width="180" height="140" rx="12" fill="#121218" stroke="#262631" />
      <circle cx="128" cy="148" r="4" fill="#262631" /><circle cx="142" cy="148" r="4" fill="#262631" /><circle cx="156" cy="148" r="4" fill="#262631" />
      <rect x="128" y="172" width="70" height="6" rx="3" fill="#8087ff" /><rect x="128" y="190" width="120" height="6" rx="3" fill="#262631" />
      <rect x="146" y="208" width="90" height="6" rx="3" fill="#262631" /><rect x="128" y="226" width="50" height="6" rx="3" fill="#ecebe6" opacity=".7" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative mx-auto grid min-h-svh max-w-6xl items-center gap-10 px-6 pb-24 pt-28 md:grid-cols-[1.25fr_1fr]">
      <div aria-hidden className="pointer-events-none absolute -left-40 top-20 size-[520px] rounded-full bg-accent/10 blur-[120px]" />
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative">
        <p className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-sm text-mute">
          <span className="size-1.5 rounded-full bg-accent" />Open to freelance work
        </p>
        <h1 className="mt-6 font-display text-5xl leading-[1.02] tracking-tight sm:text-7xl lg:text-8xl">Building digital experiences with purpose.</h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-mute">
          I'm Elyas Sakhizai, a Computer Science student at Kardan University. I like web technologies, networking and solving problems, and I build responsive interfaces with React and Tailwind.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a href="#work" className={btnPrimary}>Explore my work</a>
          <a href="#contact" className={btnGhost}>Let's connect</a>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="flex justify-center">
        <Artwork />
      </motion.div>
      <a href="#about" aria-label="Scroll to About" className="absolute bottom-6 left-6 flex items-center gap-3 text-sm text-mute hover:text-ink">
        <span className="h-10 w-px bg-line"><span className="drop block h-full w-px bg-accent" /></span>Scroll
      </a>
    </section>
  )
}
