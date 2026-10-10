import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import { PROJECTS } from '../data'
import { Section, Reveal, btnPrimary, btnGhost } from './ui'

function Browser({ p }) {
  const [missing, setMissing] = useState(false)
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-surface shadow-2xl shadow-black/50">
      <div className="flex items-center gap-3 border-b border-line px-4 py-3">
        <span aria-hidden className="flex gap-1.5">{[0, 1, 2].map((i) => <i key={i} className="size-2.5 rounded-full bg-line" />)}</span>
        <span className="mx-auto truncate text-xs text-mute">{new URL(p.live).host}</span>
      </div>
      <div className="aspect-[16/10] bg-bg">
        {missing ? (
          <div className="flex size-full flex-col justify-center gap-3 p-8" role="img" aria-label={`Placeholder for ${p.title} screenshot`}>
            <i className="h-3 w-1/3 rounded bg-accent/40" /><i className="h-2 w-2/3 rounded bg-line" /><i className="h-2 w-1/2 rounded bg-line" />
            <i className="mt-3 h-16 rounded bg-line/60" />
            <p className="mt-2 text-xs text-mute">Screenshot placeholder. Add public/screens/{p.id}.png</p>
          </div>
        ) : (
          <img src={`/screens/${p.id}.png`} alt={`Screenshot of the ${p.title} project`} width="1280" height="800" loading="lazy" onError={() => setMissing(true)} className="size-full object-cover object-top" />
        )}
      </div>
    </div>
  )
}

function Project({ p, flip }) {
  const [open, setOpen] = useState(false)
  return (
    <Reveal className={`grid items-center gap-8 md:grid-cols-2 md:gap-14 ${flip ? 'md:[&>*:first-child]:order-2' : ''}`}>
      <Browser p={p} />
      <div>
        <p className="text-sm text-accent">{p.context}</p>
        <h3 className="mt-2 font-display text-3xl tracking-tight sm:text-4xl">{p.title}</h3>
        <p className="mt-3 text-lg text-mute">{p.summary}</p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">{p.tech.map((t) => <li key={t} className="rounded-full border border-line px-3 py-1 text-sm">{t}</li>)}</ul>
        <ul className="mt-5 space-y-1 text-mute">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a href={p.live} target="_blank" rel="noreferrer" className={btnPrimary}>Live demo <ArrowUpRight size={16} aria-hidden /></a>
          {p.repo ? <a href={p.repo} target="_blank" rel="noreferrer" className={btnGhost}>GitHub</a> : <span className="text-sm text-mute">GitHub link: placeholder</span>}
        </div>
        <button onClick={() => setOpen(!open)} aria-expanded={open} aria-controls={`cs-${p.id}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold hover:text-accent">
          View case study <ChevronDown size={16} aria-hidden className={`transition-transform ${open ? 'rotate-180' : ''}`} />
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div id={`cs-${p.id}`} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
              <dl className="mt-4 space-y-4 rounded-xl border border-line bg-surface p-5 text-sm">
                <div><dt className="text-mute">What it practises</dt><dd className="mt-1">{p.problem}</dd></div>
                <div><dt className="text-mute">Process and results</dt><dd className="mt-1 text-mute"></dd></div>
              </dl>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <Section id="work" title="Selected work." intro="Four live projects, each deployed on Netlify. Screenshots and repository links are placeholders until added.">
      <div className="space-y-24 md:space-y-32">{PROJECTS.map((p, i) => <Project key={p.id} p={p} flip={i % 2 === 1} />)}</div>
    </Section>
  )
}
