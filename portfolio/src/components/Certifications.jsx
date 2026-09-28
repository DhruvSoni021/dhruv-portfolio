import { Section, LinkBtn, UnderConstruction } from './Shared'
import { certifications } from '../data/siteData'
export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications">
      <ol className="space-y-4 border-l border-line pl-6">{certifications.map(c => (
        <li key={c.name} className="glass relative p-4"><span className="absolute -left-[31px] top-6 h-2.5 w-2.5 rounded-full bg-accent" />
          <h3 className="font-semibold text-white">{c.name}</h3><p className="text-sm text-slate-400">{c.issuer}</p>
          <div className="mt-3">{c.link ? <LinkBtn href={c.link} icon="BadgeCheck">View Certificate</LinkBtn> : <UnderConstruction text="Certificate link coming soon" />}</div></li>))}</ol></Section>)
}
