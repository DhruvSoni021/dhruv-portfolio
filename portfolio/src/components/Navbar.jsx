import { useEffect, useState } from 'react'
import { profile } from '../data/siteData'
const links = ['Home','About','Skills','Projects','Coding','Certifications','Achievements','Contact']
export default function Navbar() {
  const [active, setActive] = useState('home')
  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    links.forEach(l => { const el = document.getElementById(l.toLowerCase()); el && io.observe(el) })
    return () => io.disconnect()
  }, [])
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#home" className="font-semibold text-white">{profile.name}</a>
        <ul className="hidden gap-5 text-sm lg:flex">{links.map(l => (
          <li key={l}><a href={`#${l.toLowerCase()}`} className={`pb-1 transition ${active === l.toLowerCase() ? 'border-b border-accent text-white' : 'hover:text-white'}`}>{l}</a></li>))}</ul>
        <a href={profile.resume} download className="btn btn-p">Download Resume</a>
      </nav>
      <div className="flex gap-4 overflow-x-auto px-5 pb-2 text-xs lg:hidden">{links.map(l => <a key={l} href={`#${l.toLowerCase()}`} className={active === l.toLowerCase() ? 'text-white' : ''}>{l}</a>)}</div>
    </header>)
}
