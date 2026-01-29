import React from 'react';
import { ABOUT_TEXT_PARAGRAPH_1, ABOUT_TEXT_PARAGRAPH_2 } from '../constants';
import { Database, Compass, Brain, Code } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-2">About Me</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">Business Drive, Data Mindset & Technical Expertise</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
            <p>{ABOUT_TEXT_PARAGRAPH_1}</p>
            <p>{ABOUT_TEXT_PARAGRAPH_2}</p>
          </div>

          <div className="bg-slate-800/50 p-8 rounded-2xl shadow-xl border border-slate-700 backdrop-blur-sm">
            <h4 className="text-xl font-bold text-white mb-6">Core Competencies</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3 group">
                <div className="p-2 bg-slate-900 rounded-lg text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-semibold text-white">Strategy</h5>
                  <p className="text-sm text-slate-400">Customer Experience, Strategic Consultancy (Ex-McKinsey)</p>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <div className="p-2 bg-slate-900 rounded-lg text-indigo-400 group-hover:text-indigo-300 transition-colors">
                  <Brain className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-semibold text-white">AI & ML</h5>
                  <p className="text-sm text-slate-400">Predictive Modeling, NLP, LLMs</p>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <div className="p-2 bg-slate-900 rounded-lg text-teal-400 group-hover:text-teal-300 transition-colors">
                  <Code className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-semibold text-white">Analytics</h5>
                  <p className="text-sm text-slate-400">Business Intelligence, SQL, Python</p>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <div className="p-2 bg-slate-900 rounded-lg text-purple-400 group-hover:text-purple-300 transition-colors">
                  <Database className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-semibold text-white">Engineering</h5>
                  <p className="text-sm text-slate-400">Cloud (AWS), Databricks, Pipelines</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;