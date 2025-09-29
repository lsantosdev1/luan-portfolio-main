import React from 'react';
import SectionTitle from './SectionTitle';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-20 bg-white dark:bg-gray-900/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Serviços" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="bg-slate-50 dark:bg-black border-2 border-slate-200 dark:border-green-900/80 p-8 rounded-lg text-center transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-green-500/20 dark:shadow-green-500/10"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 p-4 rounded-full">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{service.title}</h3>
              <p className="text-slate-600 dark:text-green-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;