import { Section, Icon } from './Shared'
import { achievements } from '../data/siteData'
export default function Achievements() {
  return (
    <Section id="achievements" title="Achievements & Activities">
      <ol className="space-y-4 border-l border-line pl-6">{achievements.map(a => (
        <li key={a.title} className="glass relative flex gap-4 p-4"><Icon name={a.icon} className="mt-1 shrink-0 text-accent" />
          <div><h3 className="font-semibold text-white">{a.title}</h3><p className="text-sm text-slate-400">Project: {a.project}</p></div></li>))}</ol></Section>)
}
