import React from 'react';

const NoiseLevel = ({ level, size = 'small' }) => {
  const bars = 5; // Total number of bars
  const activeClass = 'noise-bar-active';
  
  const getSizeClass = () => {
    switch(size) {
      case 'large':
        return 'h-3 w-6';
      case 'medium':
        return 'h-2.5 w-5';
      case 'small':
      default:
        return 'h-2 w-4';
    }
  };

  return (
    <div className="noise-level">
      {[...Array(bars)].map((_, i) => (
        <div 
          key={i} 
          className={`noise-bar ${getSizeClass()} ${i < level ? activeClass : ''}`}
        />
      ))}
    </div>
  );
};

export default NoiseLevel;