import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-500 py-8 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Pedro Catarino. All rights reserved.
        </p>
        <p className="text-sm">
          Built with React, Tailwind & Google Gemini
        </p>
      </div>
    </footer>
  );
};

export default Footer;