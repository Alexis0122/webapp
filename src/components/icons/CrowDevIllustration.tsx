import React from 'react';

interface CrowDevIllustrationProps {
  className?: string;
}

export const CrowDevIllustration: React.FC<CrowDevIllustrationProps> = ({ className }) => {
  return (
    <svg 
      width="912" 
      height="459" 
      viewBox="0 0 912 459" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_d_140_3857)">
        <ellipse cx="456" cy="365.789" rx="454.101" ry="40.7895" fill="#5C0C1F"/>
        {/* ... resto del SVG ... */}
      </g>
      <defs>
        <filter id="filter0_d_140_3857" x="0.898926" y="0" width="910.202" height="462" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_140_3857"/>
          <feOffset dy="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.360784 0 0 0 0 0.0470588 0 0 0 0 0.121569 0 0 0 1 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_140_3857"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_140_3857" result="shape"/>
        </filter>
      </defs>
    </svg>
  );
}; 