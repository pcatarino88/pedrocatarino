import React from 'react';
import { Project } from '../types';
import { ExternalLink, Loader, ImageOff } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [imgError, setImgError] = React.useState(false);

  return (
    <div className="group bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-slate-700 hover:shadow-2xl hover:shadow-cyan-900/20 transition-all duration-300 flex flex-col h-full">
      <div className="relative h-48 overflow-hidden bg-slate-800">
        {!imgError ? (
          <img 
            src={`${import.meta.env.BASE_URL}${project.imageUrl.replace(/^\//, "")}`} 
            alt={project.title} 
            onError={() => setImgError(true)}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-slate-500 gap-2">
            <ImageOff className="w-8 h-8" />
            <span className="text-xs">Image not found</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span 
              key={tag} 
              className="px-3 py-1 bg-slate-800 border border-slate-700 text-cyan-400 text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        <div className="mt-auto pt-4 border-t border-slate-800">
          {project.link ? (
            <a 
              href={project.link}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full gap-2 bg-slate-800 text-white border border-slate-700 px-4 py-3 rounded-xl font-medium transition-all hover:bg-cyan-600 hover:border-cyan-600 hover:text-white"
            >
              Launch App
              <ExternalLink className="w-4 h-4" />
            </a>
          ) : (
             <div className="inline-flex items-center justify-center w-full gap-2 bg-slate-950/50 text-slate-600 px-4 py-3 rounded-xl font-medium cursor-not-allowed border border-slate-800">
              <Loader className="w-4 h-4 animate-spin" />
              <span>Work in Progress</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;