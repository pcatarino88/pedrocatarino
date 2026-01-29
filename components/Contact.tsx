import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to collaborate?</h2>
        <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">
          I'm always open to discussing new opportunities, data strategies, or just geeking out over the latest in Machine Learning and AI.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/10 px-8 py-4 rounded-xl transition-all hover:scale-105 backdrop-blur-sm"
            >
              {link.icon}
              <span className="font-medium">{link.platform}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;