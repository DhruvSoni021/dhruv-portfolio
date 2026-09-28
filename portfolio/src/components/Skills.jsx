import { Section, Icon } from './Shared'
import { skills } from '../data/siteData'
export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-4 sm:grid-cols-2">{skills.map(s => (
        <div key={s.group} className="glass p-5 transition hover:border-accent">
          <div className="flex items-center gap-2 font-semibold text-white"><Icon name={s.icon} size={18} className="text-accent" />{s.group}</div>
          <div className="mt-3 flex flex-wrap gap-2">{s.items.map(i => <span key={i} className="rounded-md border border-line px-2.5 py-1 text-sm transition hover:border-violet hover:text-white">{i}</span>)}</div></div>))}</div></Section>)
}
