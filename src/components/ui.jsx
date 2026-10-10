import { motion } from 'framer-motion'

export const Reveal = ({ children, className = '', delay = 0 }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, delay, ease: 'easeOut' }}>{children}</motion.div>
)

export const Section = ({ id, title, intro, children }) => (
  <section id={id} aria-labelledby={`${id}-t`} className="mx-auto max-w-6xl px-6 py-24 md:py-32">
    <Reveal className="mb-14 max-w-2xl">
      <h2 id={`${id}-t`} className="font-display text-4xl tracking-tight sm:text-5xl">{title}</h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-mute">{intro}</p>}
    </Reveal>
    {children}
  </section>
)

export const btn = 'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors'
export const btnPrimary = `${btn} bg-accent text-bg hover:bg-ink`
export const btnGhost = `${btn} border border-line text-ink hover:border-accent hover:text-accent`
