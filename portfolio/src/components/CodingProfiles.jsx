import { motion } from 'framer-motion'
import { Section, LinkBtn, UnderConstruction } from './Shared'
import { codingStats, codingProfiles, topics, socials } from '../data/siteData'
export default function CodingProfiles() {
  return (
    <Section id="coding" title="Problem Solving" sub="Consistent DSA practice across multiple platforms.">
      <div className="grid gap-4 sm:grid-cols-2">{codingStats.map(s => (
        <div key={s.label} className="glass p-6"><div className="text-5xl font-bold text-white">{s.value}</div><div className="mt-1 text-slate-400">{s.label}</div></div>))}</div>
      <div className="mt-6 grid grid-cols-[repeat(auto-fill,minmax(14px,1fr))] gap-1" aria-hidden="true">{Array.from({ length: 84 }).map((_, i) => (
        <motion.i key={i} className="aspect-square rounded-sm bg-accent" initial={{ opacity: .08 }} whileInView={{ opacity: .2 + ((i * 37) % 10) / 14 }} viewport={{ once: true }} transition={{ delay: i * .008 }} />))}</div>
      <div className="mt-4 flex flex-wrap gap-2">{topics.map(t => <span key={t} className="rounded-md border border-line px-2.5 py-1 text-sm">{t}</span>)}</div>
      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{codingProfiles.map(p => (
        <div key={p.name} className="glass flex items-center justify-between p-4"><span className="font-semibold text-white">{p.name}</span>
          {socials[p.key] ? <LinkBtn href={socials[p.key]} icon="ExternalLink">Open</LinkBtn> : <UnderConstruction />}</div>))}</div>
    </Section>)
}
