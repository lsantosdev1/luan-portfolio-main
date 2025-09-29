import React, { useState, useEffect } from 'react';
import AnimatedBackground from './AnimatedBackground';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const toRotate = ["Luan Santos", "Desenvolvedor Frontend"];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 80 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const ticker = setTimeout(() => {
      handleType();
    }, typingSpeed);

    return () => clearTimeout(ticker);
  }, [text, isDeleting, loopNum, typingSpeed, toRotate]);

  return (
    <section id="inicio" className="h-screen flex items-center justify-center relative overflow-hidden">
      <AnimatedBackground />
      <div className="text-center z-10 p-4">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4">
          <span className="border-r-4 border-green-500 dark:border-green-400 pr-1">{text}</span>
        </h1>
        <p className="text-lg md:text-2xl text-slate-700 dark:text-green-300 mb-8 max-w-2xl mx-auto">
          Criando interfaces modernas e responsivas com as melhores tecnologias do mercado.
        </p>
        <a
          href="#projetos"
          className="bg-green-500 text-black font-bold py-3 px-8 rounded-full hover:bg-green-400 transition-all duration-300 transform hover:scale-105"
        >
          Meus Projetos
        </a>
      </div>
       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <a href="#sobre" aria-label="Scroll down">
          <div className="w-6 h-10 border-2 border-green-600 dark:border-green-400 rounded-full flex justify-center items-start p-1">
            <div className="w-1 h-2 rounded-full bg-green-600 dark:bg-green-400 animate-bounce"></div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;