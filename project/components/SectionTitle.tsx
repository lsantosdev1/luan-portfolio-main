import React from 'react';

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-slate-900 dark:text-white tracking-wider uppercase">
        {title}
      </h2>
      <div className="mt-4 h-1 w-20 bg-green-500 mx-auto rounded"></div>
    </div>
  );
};

export default SectionTitle;