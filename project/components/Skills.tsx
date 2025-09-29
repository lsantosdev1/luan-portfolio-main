import React from 'react';
import SectionTitle from './SectionTitle';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="especialidades" className="py-20 bg-slate-100 dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Especialidades" />
        <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-6">
                {SKILLS.map((skill, index) => (
                    <div key={index} className="group flex flex-col items-center gap-2 p-4 w-32">
                        <div className="w-20 h-20 bg-slate-200 dark:bg-gray-900 border border-green-500 dark:border-green-700 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 group-hover:bg-green-500 group-hover:text-black transition-all duration-300 transform group-hover:scale-110">
                            {skill.icon}
                        </div>
                        <p className="text-lg font-semibold text-slate-800 dark:text-white mt-2">{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;