import React from 'react';
import { Button, Stack } from '@mantine/core';
import { Envelope, InstagramLogo, LinkedinLogo, TwitterLogo } from 'phosphor-react';
import { XLogo } from '@phosphor-icons/react';
import './style.css';

interface FooterProps {
  animated?: boolean;
  alternateMovement?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ 
  animated = true, 
  alternateMovement = true 
}) => {
  return (
    <div style={{ position: 'relative', width: '100%', marginTop: '112px'}}>
      <div className="waves-container">
        <div className={`
          animated-wave 
          wave-1-animated 
          ${animated ? (alternateMovement ? 'alternate' : 'animate') : 'static'}
        `} />
        <div className={`
          animated-wave 
          wave-2-animated 
          ${animated ? (alternateMovement ? 'alternate' : 'animate') : 'static'}
        `} />
      </div>

      <footer className="footer">
        <div className="wave wave-1" />
        <div className="wave wave-2" />
        
        <div className="footer-content">
          <Stack align="center" gap="xs">
            <h2 className="footer-title">Join Our Crowdfunding Community</h2>
            <p className="footer-description">Discover and support innovative projects!</p>
            
            <div className="button-container">
              <Button
                size="md"
                variant="filled"
                color="white"
                styles={(theme) => ({
                  root: {
                    width: '192px',
                    height: '44px',
                    borderRadius: '14px',
                    backgroundColor: 'white',
                    '&:hover': {
                      backgroundColor: '#f0f0f0', // Color más oscuro al hover
                    },
                  },
                  label: {
                    color: '#C64A67',
                  },
                })}
              >
                Start a Project
              </Button>
              <Button
                size="md"
                variant="outline"
                color="white"
                styles={{
                  root: {
                    width: '192px',
                    height: '44px',
                    borderRadius: '14px',
                    borderColor: 'white',
                  },
                }}
              >
                Explore Projects
              </Button>
            </div>

            <div className="social-icons">
              <a href="mailto:crowdevs@crowdevs.com" aria-label="Email">
                <Envelope size={24} />
              </a>
              <a href="https://instagram.com/crowdevs" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <InstagramLogo size={24} />
              </a>
              <a href="https://linkedin.com/company/crowdevs" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedinLogo size={24} />
              </a>
              <a href="https://x.com/crowdevs" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <XLogo size={24} />
              </a>
            </div>

            <a href="tel:829-555-5555" className="contact-link">
              Contact us: 829-555-5555
            </a>

            <p className="copyright">
              © 2024 Crowdevs. All rights reserved.
            </p>
          </Stack>
        </div>
      </footer>
    </div>
  );
}; 