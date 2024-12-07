import React from 'react';
import { LinkedinLogo } from 'phosphor-react';

interface AboutUsDivDevCardProps {
  image: string;
  name: string;
  role: string;
  linkedinUrl: string;
}

export const AboutUsDivDevCard: React.FC<AboutUsDivDevCardProps> = ({
  image,
  name,
  role,
  linkedinUrl
}) => {
  return (
    <div className="dev-card">
      <div className="dev-image-wrapper">
        <div className="dev-image-container">
          <img src={image} alt={name} className="dev-image" />
        </div>
      </div>
      <div className="dev-info">
        <div className="dev-header">
          <a 
            href={linkedinUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="dev-name-link"
          >
            <h3 className="dev-name">{name}</h3>
            <LinkedinLogo 
              size={24} 
              weight="regular"
              className="linkedin-icon"
            />
          </a>
        </div>
        <p className="dev-role">{role}</p>
      </div>
    </div>
  );
}; 