import React from 'react';
import { AboutUsInfoDivCard } from './AboutUsInfoDivCard';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import '../style.css';

interface AboutUsInfoDivProps {
  variant?: 'red' | 'white';
  title: string;
  description: string;
  card: {
    icon: React.ReactNode;
    title: string;
    description: string;
  };
}

export const AboutUsInfoDiv: React.FC<AboutUsInfoDivProps> = ({ 
  variant = 'white',
  title,
  description,
  card
}) => {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <div 
      ref={ref}
      className={`info-div-container ${variant} ${isVisible ? 'fade-in' : ''}`}
    >
      <h2 className={`info-div-title ${variant}`}>{title}</h2>
      <p className={`info-div-description ${variant}`}>{description}</p>
      <AboutUsInfoDivCard
        icon={card.icon}
        title={card.title}
        description={card.description}
      />
      <div className="background-element-left">
        {/* SVG A */}
      </div>
      <div className="background-element-right">
        {/* SVG B */}
      </div>
    </div>
  );
}; 