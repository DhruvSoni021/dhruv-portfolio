import { profile, socials } from '../data/siteData'
import { UnderConstruction } from './Shared'
export default function Footer() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 py-16"><div className="glass p-8 text-center">
        <h2 className="text-2xl font-semibold text-white">Want to know more?</h2>
        <p className="mx-auto mt-2 max-w-xl text-slate-400">View my resume for a detailed overview of my education, projects, technical skills, coding experience and certifications.</p>
        <div className="mt-5 flex justify-center gap-3"><a href={profile.resume} target="_blank" rel="noreferrer" className="btn btn-p">View Resume</a><a href={profile.resume} download className="btn">Download Resume</a></div></div></section>
      <footer className="border-t border-line px-5 py-10 text-center text-sm">
        <div className="font-semibold text-white">{profile.name}</div><p className="text-slate-500">Building. Learning. Solving.</p>
        <div className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2">{Object.entries(socials).map(([k, v]) => v
          ? <a key={k} href={v} target="_blank" rel="noreferrer" className="capitalize hover:text-white">{k}</a>
          : <span key={k} className="flex items-center gap-1.5 capitalize opacity-70">{k}<UnderConstruction text="soon" /></span>)}</div>
        <p className="mt-6 text-slate-500">© 2026 Dhruv Soni. All rights reserved.</p></footer></>)
}
