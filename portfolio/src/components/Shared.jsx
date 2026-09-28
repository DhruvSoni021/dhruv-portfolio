import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
export const Icon = ({ name, ...p }) => { const I = Icons[name] || Icons.Circle; return <I {...p} /> }
export const UnderConstruction = ({ text = 'Under construction' }) => (
  <span className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-amber-400/50 px-2.5 py-0.5 text-xs text-amber-300"><Icons.Construction size={12} />{text}</span>)
// Renders a link button, or an "Under construction" label when the url is empty.
export const LinkBtn = ({ href, icon, children, primary }) => href
  ? <a href={href} target="_blank" rel="noreferrer" className={`btn ${primary ? 'btn-p' : ''}`}><Icon name={icon} size={16} />{children}</a>
  : <span className="btn cursor-not-allowed opacity-70"><Icon name={icon} size={16} />{children} <UnderConstruction /></span>
export const Section = ({ id, title, sub, children }) => (
  <section id={id} className="mx-auto max-w-6xl px-5 py-20">
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .35 }}>
      <h2 className="text-3xl font-semibold text-white">{title}</h2>{sub && <p className="mt-2 max-w-xl text-slate-400">{sub}</p>}
      <div className="mt-8">{children}</div></motion.div></section>)
