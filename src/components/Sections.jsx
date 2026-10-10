import { Award } from 'lucide-react'
import { SKILLS, JOURNEY } from '../data'
import { Section, Reveal } from './ui'

export function About() {
  return (
    <Section id="about" title="Curious, careful, and building toward real software.">
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-5 text-lg leading-relaxed text-mute">
          <p>I'm a Computer Science student at Kardan University. I enjoy the point where a design becomes a working interface, and I'm learning to build the parts behind it too.</p>
          <p>My interests run across frontend and backend development, networking and software engineering. I learn by building small, complete things and improving them, and I want to keep building technology that people find useful.</p>
        </Reveal>
        <Reveal delay={0.1}>
          <dl className="divide-y divide-line rounded-xl border border-line bg-surface">
            {[['Education', 'BS Computer Science, Kardan University'], ['Focus', 'Frontend, backend, networking'], ['Looking for', 'Internships, junior roles, freelance']].map(([k, v]) => (
              <div key={k} className="p-5"><dt className="text-sm text-mute">{k}</dt><dd className="mt-1">{v}</dd></div>
            ))}
            <div className="flex items-start gap-3 p-5 text-mute"><Award size={18} className="mt-1 shrink-0" aria-hidden />
              <div><dt className="text-sm">Certifications</dt><dd className="mt-1 text-sm">Placeholder: add verified certifications and achievements here.</dd></div></div>
          </dl>
        </Reveal>
      </div>
    </Section>
  )
}

export function Skills() {
  return (
    <Section id="skills" title="What I work with." intro="Grouped by area. Fundamentals are labelled as fundamentals.">
      <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map(({ icon: Icon, title, items }) => (
          <Reveal key={title} className="bg-bg p-7 transition-colors hover:bg-surface">
            <Icon className="text-accent" size={22} aria-hidden />
            <h3 className="mt-5 text-lg font-semibold">{title}</h3>
            <ul className="mt-3 space-y-1.5 text-mute">{items.map((i) => <li key={i}>{i}</li>)}</ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export function Journey() {
  return (
    <Section id="journey" title="Learning journey." intro="Education, coursework, personal projects and employment, kept separate.">
      <ol className="relative border-l border-line">
        {JOURNEY.map((j, i) => (
          <Reveal key={j.title} className="relative pb-10 pl-8 last:pb-0">
            <span aria-hidden className={`absolute -left-[5px] top-2 size-2.5 rounded-full ${i === 0 ? 'bg-accent' : 'bg-line'}`} />
            <p className="text-sm text-accent">{j.type}</p>
            <h3 className="mt-1 text-xl font-semibold">{j.title}</h3>
            <p className="mt-1 max-w-xl text-mute">{j.text}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
