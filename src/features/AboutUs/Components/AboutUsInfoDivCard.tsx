import React from 'react';
import '../style.css';

interface AboutUsInfoDivCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

export const AboutUsInfoDivCard: React.FC<AboutUsInfoDivCardProps> = ({
  icon,
  title,
  description
}) => {
  return (
    <div className="info-card">
      {icon && <div className="info-card-icon">{icon}</div>}
      <h3 className="info-card-title">{title}</h3>
      <p className="info-card-description">{description}</p>
    </div>
  );
}; 