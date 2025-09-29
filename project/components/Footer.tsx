import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white dark:bg-black border-t border-slate-200 dark:border-green-900/50 py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-600 dark:text-green-600">
        <p>&copy; {currentYear} Luan Santos. Todos os direitos reservados.</p>
        <p className="text-sm mt-1">Desenvolvido com paixão e React.</p>
      </div>
    </footer>
  );
};

export default Footer;