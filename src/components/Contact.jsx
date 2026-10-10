import { useState } from 'react'
import { Mail, ArrowUpRight } from 'lucide-react'
import { SOCIAL } from '../data'
import { Section, btnPrimary } from './ui'

const validate = (v) => {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Enter your name (at least 2 characters).'
  if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = 'Enter a valid email address, like name@example.com.'
  if (v.message.trim().length < 10) e.message = 'Write a message of at least 10 characters.'
  return e
}

export default function Contact() {
  const [v, setV] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')
  const set = (k) => (e) => setV({ ...v, [k]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const err = validate(v)
    setErrors(err)
    if (Object.keys(err).length) return setStatus('error')
    const body = encodeURIComponent(`${v.message}\n\nFrom: ${v.name} (${v.email})`)
    window.location.href = `mailto:${SOCIAL.email}?subject=${encodeURIComponent('Portfolio message from ' + v.name)}&body=${body}`
    setStatus('success')
  }
  const field = 'mt-2 w-full rounded-lg border bg-surface px-4 py-3 text-ink placeholder:text-mute/70'
  const Err = ({ k }) => errors[k] ? <p id={`${k}-e`} className="mt-1 text-sm text-red-300">{errors[k]}</p> : null

  return (
    <Section id="contact" title="Have an idea? Let's build something meaningful.">
      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-4">
          <a href={`mailto:${SOCIAL.email}`} className="inline-flex items-center gap-3 text-xl hover:text-accent"><Mail size={20} aria-hidden />{SOCIAL.email}</a>
          <ul className="space-y-2 text-mute">
            <li><a href={SOCIAL.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-ink">LinkedIn <ArrowUpRight size={14} aria-hidden /></a></li>
            <li><a href={SOCIAL.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-ink">GitHub <ArrowUpRight size={14} aria-hidden /></a></li>
          </ul>
        </div>
        <form onSubmit={submit} noValidate className="space-y-5">
          {[['name', 'Name', 'text'], ['email', 'Email', 'email']].map(([k, l, t]) => (
            <div key={k}>
              <label htmlFor={k}>{l}</label>
              <input id={k} type={t} value={v[k]} onChange={set(k)} autoComplete={k} aria-invalid={!!errors[k]} aria-describedby={errors[k] ? `${k}-e` : undefined} className={`${field} ${errors[k] ? 'border-red-300' : 'border-line'}`} />
              <Err k={k} />
            </div>
          ))}
          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" value={v.message} onChange={set('message')} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-e' : undefined} className={`${field} ${errors.message ? 'border-red-300' : 'border-line'}`} />
            <Err k="message" />
          </div>
          <button type="submit" className={btnPrimary}>Send message</button>
          <p role="status" aria-live="polite" className={`text-sm ${status === 'success' ? 'text-accent' : 'text-red-300'}`}>
            {status === 'success' && `Your email app should open with the message ready. If it doesn't, write to ${SOCIAL.email}.`}
            {status === 'error' && 'Fix the highlighted fields and send again.'}
          </p>
        </form>
      </div>
      <footer className="mt-28 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8 text-sm text-mute">
        <p>&copy; {new Date().getFullYear()} Sakhizai. All rights reserved.</p>
        <ul className="flex gap-6"><li><a className="hover:text-ink" href={SOCIAL.github} target="_blank" rel="noreferrer">GitHub</a></li><li><a className="hover:text-ink" href={SOCIAL.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li><li><a className="hover:text-ink" href={`mailto:${SOCIAL.email}`}>Email</a></li></ul>
      </footer>
    </Section>
  )
}
