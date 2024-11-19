'use client';

import React, { useState, useEffect, useRef } from 'react';

interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ children, content }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ left: 0, top: 0 });
  const tooltipRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleMouseEnter = (e: MouseEvent) => {
      const tooltipElement = tooltipRef.current;
      if (tooltipElement) {
        const { left, top } = tooltipElement.getBoundingClientRect();
        setPosition({
          left: e.clientX - left + 20,
          top: e.clientY - top + 20,
        });
        setIsVisible(true);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const tooltipElement = tooltipRef.current;
    if (tooltipElement) {
      tooltipElement.addEventListener('mouseenter', handleMouseEnter);
      tooltipElement.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (tooltipElement) {
        tooltipElement.removeEventListener('mouseenter', handleMouseEnter);
        tooltipElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div className="tooltip-wrapper">
      {children}
      {isVisible && (
        <span
          ref={tooltipRef}
          className="tooltip-content"
          style={{ left: `${position.left}px`, top: `${position.top}px` }}
        >
          {content}
        </span>
      )}
    </div>
  );
};

export default Tooltip;