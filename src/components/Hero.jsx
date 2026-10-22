import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
      
      {/* Contenu Texte */}
      <div className="flex-1 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-xs text-sky-400 font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          {personalInfo.status}
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-100 leading-tight">
          {personalInfo.role}
        </h1>

        <p className="text-base md:text-lg text-slate-400 max-w-xl">
          {personalInfo.about}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="#projets"
            className="px-6 py-3 rounded-xl bg-sky-500 text-slate-950 font-semibold hover:bg-sky-400 transition-all shadow-lg shadow-sky-500/20"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-slate-800/80 text-slate-200 border border-slate-700/80 hover:bg-slate-800 hover:border-slate-600 transition-all"
          >
            Me contacter
          </a>
        </div>
      </div>

      {/* Visuel / Card interactive placeholder */}
      <div className="flex-1 w-full max-w-md aspect-square rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/60 flex items-center justify-center p-8 relative overflow-hidden group shadow-2xl">
        <div className="absolute inset-0 bg-sky-500/10 blur-3xl rounded-full group-hover:bg-sky-500/20 transition-all duration-500"></div>
        
        <div className="relative text-center space-y-3">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-sky-500/10 border border-sky-400/30 flex items-center justify-center text-sky-400 font-mono text-2xl font-bold">
            3D
          </div>
          <p className="text-sm font-semibold text-slate-200">Emplacement Dispositif Interactif</p>
          <p className="text-xs text-slate-400 font-mono">A-Frame / Three.js Canvas</p>
        </div>
      </div>

    </section>
  );
}