import React from 'react';

interface HexagonFilledProps {
  className?: string;
  width?: number;
  height?: number;
}

export const HexagonFilled: React.FC<HexagonFilledProps> = ({ 
  className,
  width = 60,
  height = 70
}) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 60 70" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M30 0L60 17.4V52L30 69.4L0 52V17.4L30 0Z" fill="#5C0C1F"/>
    </svg>
  );
}; 