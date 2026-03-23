import { projects } from '@data';
import { ProjectCard } from './ProjectCard';

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-10 scroll-mt-16">

      <div className="flex justify-center mb-12 text-center group">
        <h3 className="text-(--color-text) text-4xl sm:text-5xl lg:text-6xl font-bold text-center tracking-wide rotate-4 group-hover:rotate-0 transition-transform duration-300">PROY</h3>
        <h3 className="text-(--color-text) text-4xl sm:text-5xl lg:text-6xl font-bold text-center tracking-wide -rotate-2 group-hover:rotate-0 transition-transform duration-300">ECTOS</h3>
      </div>

      <div className="flex flex-col gap-16">
        {projects.map((proj, i) => (
          <ProjectCard 
            key={proj.title} 
            project={proj} 
            index={i}
            isLast={i === projects.length - 1}
          />
        ))}
      </div>

    </section>
  );
}
