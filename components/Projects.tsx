import React from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-2">My Work</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Selected Projects</h3>
          <p className="text-slate-400">
            A selection of projects demonstrating the intersection of data science, machine learning, and business application.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;