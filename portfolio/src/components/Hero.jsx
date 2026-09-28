import { motion } from 'framer-motion'
import { profile, socials } from '../data/siteData'
import { LinkBtn } from './Shared'
const code = ['class Dhruv extends Developer {','  String focus = "Java + DSA";','  String learning = "Web + AI";','  void solve() { practice(); }','}']
export default function Hero() {
  return (
    <section id="home" className="mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-5 pt-32 pb-16 md:grid-cols-2">
      <div>
        <h1 className="text-5xl font-bold leading-tight text-white md:text-6xl">Hi, I'm {profile.name}</h1>
        <p className="mt-3 text-xl text-accent">{profile.title}</p>
        <p className="mt-4 max-w-lg text-slate-400">{profile.intro}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#projects" className="btn btn-p">View Projects</a>
          <a href={profile.resume} download className="btn">Download Resume</a></div>
        <div className="mt-5 flex flex-wrap gap-2">
          <LinkBtn href={socials.github} icon="Github">GitHub</LinkBtn>
          <LinkBtn href={socials.linkedin} icon="Linkedin">LinkedIn</LinkBtn>
          <LinkBtn href={socials.leetcode} icon="Code2">LeetCode</LinkBtn></div>
      </div>
      <div className="glass overflow-hidden font-mono text-sm" aria-hidden="true">
        <div className="flex items-center gap-1.5 border-b border-line px-4 py-2"><i className="h-2.5 w-2.5 rounded-full bg-slate-600"/><i className="h-2.5 w-2.5 rounded-full bg-slate-600"/><i className="h-2.5 w-2.5 rounded-full bg-slate-600"/><span className="ml-3 text-xs text-slate-500">Dhruv.java</span></div>
        <div className="space-y-1 p-5">{code.map((l, i) => (
          <motion.pre key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .4 + i * .35 }} className="whitespace-pre-wrap text-slate-300">{l}</motion.pre>))}
          <motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: .8 }} className="inline-block h-4 w-2 bg-accent" /></div>
      </div>
    </section>)
}
