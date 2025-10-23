import React from "react";
import SectionTitle from "./SectionTitle";
import fotoDePerfil from "../assets/fotoDePerfil.jpg"; 
 
const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-slate-100 dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Sobre Mim" />
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-green-500 rounded-full transform rotate-6 z-10"></div>
              <img
                src={fotoDePerfil} 
                alt="Luan Santos"
                className="absolute inset-0 z-20 w-full h-full object-cover rounded-full border-4 border-white dark:border-black shadow-lg"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Olá! Sou Luan Santos.
            </h3>
            <p className="text-lg text-slate-700 dark:text-green-300 mb-4 leading-relaxed">
              Tenho 25 anos, resido em Nova Iguaçu - RJ e sou um desenvolvedor
              Frontend apaixonado por criar experiências digitais intuitivas e
              visualmente atraentes. Atualmente, estou cursando Análise e
              Desenvolvimento de Sistemas para aprofundar meus conhecimentos.
            </p>
            <p className="text-lg text-slate-700 dark:text-green-300 mb-4 leading-relaxed">
              Minha jornada na programação começou com Lógica de Programação, e
              desde então, me especializei em tecnologias como React, JavaScript
              e Material UI. Embora meu foco seja o frontend, tenho uma boa
              compreensão de backend e banco de dados, o que me dá uma visão
              completa do ciclo de desenvolvimento.
            </p>
            <p className="text-lg text-slate-700 dark:text-green-300 mb-6 leading-relaxed">
              Fora do código, gosto de manter o equilíbrio praticando
              musculação, ouvindo música e valorizando momentos de paz.
            </p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-black font-bold py-3 px-8 rounded-full hover:bg-green-400 transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Abrir Currículo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;