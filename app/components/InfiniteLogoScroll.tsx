import React from 'react';

// Array met logo's
const logos = [
  { id: 1, src: '/images/Group 22.svg' },
  { id: 2, src: '/images/Group 23 (11).svg' },
  { id: 3, src: '/images/Group 24.svg' },
  { id: 4, src: '/images/Group 25.svg' },
  { id: 5, src: '/images/Group 26.svg' },
  { id: 6, src: '/images/Group 28.svg' },
  { id: 7, src: '/images/Group 31.svg' },
  { id: 8, src: '/images/Group 32.svg' },
  { id: 9, src: '/images/Group 35.svg' },
  { id: 10, src: '/images/Group 36.svg' },
  { id: 11, src: '/images/Group 22.svg' },
  { id: 12, src: '/images/Group 23 (11).svg' },
  { id: 13, src: '/images/Group 24.svg' },
  { id: 14, src: '/images/Group 25.svg' },
];

// Definieer de InfiniteLogoScroll-component
const InfiniteLogoScroll: React.FC = () => {
  return (
    <div className="w-full overflow-hidden bg-gray-100 py-12">
      {/* Eén rij met logo's */}
      <div className="flex animate-scroll gap-12">
        {/* Herhaal de logo's meerdere keren om een eindeloze animatie te simuleren */}
        {[...logos, ...logos, ...logos].map((logo, index) => {
          const isEven = logo.id % 2 === 0;
          const translateClass = isEven ? 'translate-y-8' : '-translate-y-8';

          return (
            <img
              key={`logo-${logo.id}-${index}`}
              src={logo.src}
              alt={`Logo ${logo.id}`}
              className={`h-48 w-auto ${translateClass} transition-transform duration-300`}
            />
          );
        })}
      </div>
    </div>
  );
};

// Exporteer de component voor gebruik in andere bestanden
export default InfiniteLogoScroll;
