import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/60">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Nom */}
        <a href="#" className="text-lg font-bold text-slate-100 hover:text-sky-400 transition-colors">
          {personalInfo.name}<span className="text-sky-400">.</span>
        </a>

        {/* Navigation links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#projets" className="hover:text-sky-400 transition-colors">Projets</a>
          <a href="#skills" className="hover:text-sky-400 transition-colors">Compétences</a>
          <a href="#about" className="hover:text-sky-400 transition-colors">À propos</a>
          <a href="#contact" className="hover:text-sky-400 transition-colors">Contact</a>
        </div>

        {/* CTA Contact Button */}
        <a
          href="#contact"
          className="px-4 py-2 text-xs font-semibold rounded-full bg-sky-500 text-slate-950 hover:bg-sky-400 transition-all shadow-md shadow-sky-500/20"
        >
          Me contacter
        </a>
      </div>
    </nav>
  );
}