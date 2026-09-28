import { GitBranch } from 'lucide-react'
import { LinkBtn, UnderConstruction } from './Shared'
export default function ProjectCard({ p }) {
  return (
    <article className={`glass p-6 transition hover:-translate-y-1 hover:border-accent ${p.featured ? 'md:col-span-2' : ''}`}>
      <div className="flex flex-wrap items-center gap-2">
        <GitBranch size={16} className="text-accent" /><h3 className="text-2xl font-semibold text-white">{p.name}</h3>
        {p.featured && <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-xs text-accent">Featured</span>}
        {p.status && <span className="rounded-full bg-emerald-400/10 px-2.5 py-0.5 text-xs text-emerald-300">{p.status}</span>}</div>
      <p className="mt-1 text-slate-400">{p.tagline}</p><p className="mt-3">{p.desc}</p>
      {p.event && <p className="mt-2 text-sm text-violet">{p.event}</p>}
      <ul className={`mt-4 grid gap-1.5 text-sm text-slate-400 ${p.featured ? 'sm:grid-cols-2' : ''}`}>{p.highlights.map(h => <li key={h} className="before:mr-2 before:text-accent before:content-['›']">{h}</li>)}</ul>
      <div className="mt-4 flex flex-wrap gap-2">{p.tech.length ? p.tech.map(t => <span key={t} className="rounded-md border border-line px-2 py-0.5 text-xs">{t}</span>) : <UnderConstruction text="Tech stack coming soon" />}</div>
      <div className="mt-5 flex flex-wrap gap-2"><LinkBtn href={p.github} icon="Github">GitHub</LinkBtn><LinkBtn href={p.demo} icon="ExternalLink" primary>Live Demo</LinkBtn></div>
    </article>)
}
