import React from 'react';
import SectionTitle from './SectionTitle';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projetos" className="py-20 bg-white dark:bg-gray-900/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Projetos" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <div key={index} className="group bg-slate-50 dark:bg-black border-2 border-slate-200 dark:border-green-900/80 rounded-lg overflow-hidden shadow-lg hover:shadow-green-500/20 dark:shadow-green-500/10 transition-shadow duration-300">
              <div className="relative">
                <img src={project.image} alt={project.title} className="w-full h-56 object-cover group-hover:opacity-50 transition-opacity duration-300" />
                 <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xl font-bold">Em breve</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-green-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                        <span key={tag} className="bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;