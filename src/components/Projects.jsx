import { projects } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projets" className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-800/60">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <h2 className="text-xs font-mono text-sky-400 uppercase tracking-widest mb-2">Portfolio</h2>
          <h3 className="text-3xl font-extrabold text-slate-100">Projets récents</h3>
        </div>
        <p className="text-slate-400 text-sm max-w-md">
          Une sélection de projets web full-stack, d'applications interactives et de travaux d'IUT.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group rounded-2xl bg-slate-900/80 border border-slate-800 p-6 flex flex-col justify-between hover:border-sky-500/50 hover:bg-slate-900 transition-all duration-300"
          >
            <div>
              <span className="text-xs font-mono text-sky-400">{project.category}</span>
              <h4 className="text-xl font-bold text-slate-100 mt-2 mb-3 group-hover:text-sky-300 transition-colors">
                {project.title}
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            <div>
              {/* Badges Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-800 text-slate-300 border border-slate-700/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Liens GitHub / Demo */}
              <div className="flex items-center gap-4 text-xs font-semibold pt-4 border-t border-slate-800/80">
                <a
                  href={project.githubLink}
                  className="text-slate-300 hover:text-sky-400 transition-colors flex items-center gap-1"
                >
                  Code GitHub →
                </a>
                <a
                  href={project.demoLink}
                  className="text-slate-300 hover:text-sky-400 transition-colors flex items-center gap-1"
                >
                  Démo Live ↗
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}