import React from 'react';
import SectionTitle from './SectionTitle';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projetos" className="py-20 bg-white dark:bg-gray-900/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Projetos" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => {
            // A "div" do card 
            const projectCard = (
              <div className="group bg-slate-50 dark:bg-black border-2 border-slate-200 dark:border-green-900/80 rounded-lg overflow-hidden shadow-lg hover:shadow-green-500/20 dark:shadow-green-500/10 transition-shadow duration-300 h-full flex flex-col">
                <div className="relative">
                  <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
                  {/* Lógica para mostrar "Em breve" apenas se não houver link */}
                  {!project.link && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <p className="text-white text-xl font-bold">Em breve</p>
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-slate-600 dark:text-green-300 mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            );

            // 👇 A MÁGICA ACONTECE AQUI 👇
            // Verificamos se existe um link para o projeto.
            // Se tiver, renderizamos o card dentro de uma tag <a>.
            // Se não, renderizamos apenas o card normal (a <div>).
            return project.link ? (
              <a 
                key={project.title} // A "key" deve estar no elemento mais externo
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block transform transition-transform duration-300 hover:scale-105"
              >
                {projectCard}
              </a>
            ) : (
              <div key={project.title}>
                {projectCard}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;