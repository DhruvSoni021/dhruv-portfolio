import { Section } from './Shared'
import ProjectCard from './ProjectCard'
import { projects } from '../data/siteData'
export default function Projects() {
  return <Section id="projects" title="Projects"><div className="grid gap-5 md:grid-cols-2">{projects.map(p => <ProjectCard key={p.name} p={p} />)}</div></Section>
}
