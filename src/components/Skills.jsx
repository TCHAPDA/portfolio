import { skills } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-800/60">
      <div className="mb-12">
        <h2 className="text-xs font-mono text-sky-400 uppercase tracking-widest mb-2">Expertise</h2>
        <h3 className="text-3xl font-extrabold text-slate-100">Stack Technique</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.map((skillGroup, idx) => (
          <div
            key={idx}
            className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 hover:border-slate-700 transition-colors"
          >
            <h4 className="text-lg font-bold text-sky-400 mb-4 pb-2 border-b border-slate-800">
              {skillGroup.category}
            </h4>

            <ul className="space-y-3">
              {skillGroup.items.map((item, itemIdx) => (
                <li key={itemIdx} className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}