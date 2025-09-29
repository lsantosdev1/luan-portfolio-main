import React from 'react';
import SectionTitle from './SectionTitle';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-20 bg-slate-100 dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionTitle title="Contato" />
        <p className="text-xl text-slate-700 dark:text-green-300 max-w-2xl mx-auto mb-8">
          Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à vontade para entrar em contato!
        </p>
        <div className="flex justify-center items-center gap-6">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-white hover:scale-125 transform transition-all duration-300"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;