import { useState } from 'react'
import { Mail, Phone } from 'lucide-react'
import { Section, LinkBtn } from './Shared'
import { profile, socials } from '../data/siteData'
export default function Contact() {
  const [f, setF] = useState({ name: '', email: '', message: '' })
  // No backend: opens the visitor's mail app. Swap for Formspree/EmailJS later if wanted.
  const send = () => { window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent('Portfolio message from ' + f.name)}&body=${encodeURIComponent(f.message + '\n\n' + f.email)}` }
  const inp = 'w-full rounded-lg border border-line bg-panel px-3 py-2 text-sm outline-none focus:border-accent'
  return (
    <Section id="contact" title="Let's Build Something Together" sub="I'm interested in software development, problem solving, AI-powered applications, and building practical technology solutions.">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-3">
          <a className="flex items-center gap-2 hover:text-white" href={`mailto:${profile.email}`}><Mail size={16} />{profile.email}</a>
          <a className="flex items-center gap-2 hover:text-white" href={`tel:${profile.phone.replace(/\s/g, '')}`}><Phone size={16} />{profile.phone}</a>
          <div className="flex flex-wrap gap-2 pt-2"><LinkBtn href={socials.linkedin} icon="Linkedin">LinkedIn</LinkBtn><LinkBtn href={socials.github} icon="Github">GitHub</LinkBtn><LinkBtn href={socials.leetcode} icon="Code2">LeetCode</LinkBtn><LinkBtn href={socials.geeksforgeeks} icon="Code2">GeeksForGeeks</LinkBtn></div></div>
        <div className="space-y-3">
          <input className={inp} placeholder="Name" aria-label="Name" value={f.name} onChange={e => setF({ ...f, name: e.target.value })} />
          <input className={inp} placeholder="Email" aria-label="Email" type="email" value={f.email} onChange={e => setF({ ...f, email: e.target.value })} />
          <textarea className={inp} rows={4} placeholder="Message" aria-label="Message" value={f.message} onChange={e => setF({ ...f, message: e.target.value })} />
          <button onClick={send} className="btn btn-p">Send Message</button></div></div></Section>)
}
