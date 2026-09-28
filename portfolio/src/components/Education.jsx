import { GraduationCap } from 'lucide-react'
import { education as e } from '../data/siteData'
export default function Education() {
  return (
    <div className="glass p-5"><GraduationCap className="text-accent" />
      <h3 className="mt-3 font-semibold text-white">{e.school}</h3>
      <p className="text-sm">{e.degree}</p><p className="text-sm text-slate-400">{e.years} · SGPA: {e.sgpa}</p>
      <p className="mt-2 text-xs text-slate-500">12th CBSE: {e.twelfth} · 10th CBSE: {e.tenth}</p></div>)
}
