
import React from 'react';
import { ArrowDown } from 'lucide-react';
import TypewriterText from '../common/TypewriterText';
import BlobImage from '../common/BlobImage';
import SocialButtons from '../common/SocialButtons';

const Hero: React.FC = () => {
  const roles = [
    'Frontend Developer',
    'React Specialist',
    'UI/UX Enthusiast',
    'Web Developer'
  ];

  return (
    <section id="home" className="relative pt-28 pb-20 min-h-screen flex items-center">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(120,119,198,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-block px-3 py-1 mb-3 text-sm font-medium rounded-full bg-accent text-accent-foreground animate-fade-in">
              <span role="img" aria-label="wave" className="mr-2">👋</span> Hello, I'm
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
              <span className="text-primary">John</span> Doe
            </h1>
            
            <div className="text-2xl md:text-3xl font-medium text-foreground/80 mb-5 h-12 animate-fade-in">
              I'm a <TypewriterText texts={roles} typingSpeed={100} className="text-primary" />
            </div>
            
            <p className="mb-8 max-w-xl mx-auto lg:mx-0 text-muted-foreground animate-fade-in">
              Specializing in crafting elegant, high-performance web experiences
              that blend cutting-edge technology with exceptional design.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8 animate-fade-in">
              <a 
                href="/resume.pdf" 
                className="btn-primary group"
                download
              >
                Download Resume
                <ArrowDown className="ml-2 transition-transform group-hover:translate-y-1" size={18} />
              </a>
              
              <SocialButtons className="mt-4 sm:mt-0" />
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <BlobImage
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="John Doe - Web Developer"
              isPulsing={true}
              className="w-full max-w-md"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#about" 
          className="p-2 rounded-full inline-block bg-secondary hover:bg-primary hover:text-white transition-colors"
          aria-label="Scroll to About section"
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
