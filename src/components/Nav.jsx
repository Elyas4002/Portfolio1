import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV } from '../data'
import { btnPrimary } from './ui'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const href = (n) => `#${n.toLowerCase()}`
  const link = 'text-sm text-mute transition-colors hover:text-ink'
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line/70 bg-bg/80 backdrop-blur-md">
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-display text-xl tracking-tight">Sakhizai<span className="text-accent">.</span></a>
        <ul className="hidden items-center gap-8 md:flex">
          {NAV.filter((n) => n !== 'Contact').map((n) => <li key={n}><a className={link} href={href(n)}>{n}</a></li>)}
          <li><a className={`${btnPrimary} !py-2`} href="#contact">Contact</a></li>
        </ul>
        <button className="md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <ul id="mobile-menu" className="space-y-1 border-t border-line bg-bg px-6 py-4 md:hidden">
          {NAV.map((n) => <li key={n}><a className="block py-3 text-lg" href={href(n)} onClick={() => setOpen(false)}>{n}</a></li>)}
        </ul>
      )}
    </header>
  )
}
