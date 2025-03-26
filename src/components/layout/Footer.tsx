
import React from 'react';
import { Heart } from 'lucide-react';
import SocialButtons from '../common/SocialButtons';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-card py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center mb-8">
          <a href="#home" className="text-2xl font-bold mb-6">
            <span className="text-primary">Dev</span>Portfolio
          </a>
          
          <nav className="mb-6">
            <ul className="flex flex-wrap items-center justify-center gap-6">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <SocialButtons className="mb-8" />
          
          <div className="h-px w-full max-w-md bg-border mb-6"></div>
          
          <p className="text-sm block text-muted-foreground items-center">
            © {currentYear} John Doe. All rights reserved. Made with 
            <Heart size={14} className="mx-1 inline text-primary" fill="currentColor" />
            in San Francisco
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
