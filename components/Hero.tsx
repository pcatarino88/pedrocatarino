import React from 'react';
import { ArrowDown } from 'lucide-react';
import { HERO_SUBTITLE } from '../constants';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex flex-col justify-center items-center bg-slate-950 overflow-hidden">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-900/30 rounded-full blur-3xl"></div>
        <div className="absolute top-40 -left-20 w-72 h-72 bg-indigo-900/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-20 w-80 h-80 bg-blue-900/20 rounded-full blur-3xl"></div>
      </div>

      <div className="z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/50 border border-slate-800 text-cyan-400 text-sm font-medium mb-8 backdrop-blur-sm shadow-lg shadow-cyan-900/10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          Personal Project Portfolio
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
          Turning <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Data</span> into Strategy <br className="hidden lg:block" /> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Strategy</span> into <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Results.</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
          {HERO_SUBTITLE}
        </p>
        
        <div className="flex gap-4 justify-center">
          <button 
            onClick={scrollToProjects}
            className="group bg-cyan-500 text-slate-950 px-8 py-3 rounded-full font-bold transition-all hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center gap-2"
          >
            View Projects
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>
          <button 
            onClick={scrollToContact}
            className="bg-transparent border border-slate-700 text-white px-8 py-3 rounded-full font-medium transition-all hover:border-slate-500 hover:bg-slate-900"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;