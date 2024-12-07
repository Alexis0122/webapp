import React from 'react';

interface HexagonOutlinedProps {
  className?: string;
  width?: number;
  height?: number;
}

export const HexagonOutlined: React.FC<HexagonOutlinedProps> = ({ 
  className,
  width = 65,
  height = 77
}) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 65 77" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M32.5 2L64 20.3026V56.6974L32.5 75L1 56.6974V20.3026L32.5 2Z" stroke="#890D2A" strokeWidth="2"/>
    </svg>
  );
}; 