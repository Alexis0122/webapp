import React, { useEffect, useState } from 'react';
import { ArrowUp } from '@phosphor-icons/react';
import styles from './GoUpButton.module.css';

export const GoUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const content = document.querySelector('.mantine-Stack-root');
      if (content) {
        if (content.scrollTop > 100) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    const content = document.querySelector('.mantine-Stack-root');
    if (content) {
      content.addEventListener('scroll', toggleVisibility);
      return () => content.removeEventListener('scroll', toggleVisibility);
    }
  }, []);

  const scrollToTop = () => {
    const content = document.querySelector('.mantine-Stack-root');
    if (content) {
      content.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <button
      className={`${styles.goUpButton} ${isVisible ? styles.visible : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <ArrowUp 
        size={32}
        weight="bold"
        className={styles.icon}
      />
    </button>
  );
}; 