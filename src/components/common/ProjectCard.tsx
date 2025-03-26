import React from 'react';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  className?: string;
  onClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
  className,
  onClick,
}) => {
  return (
    <motion.div 
      className={cn(
        "group relative overflow-hidden rounded-xl shadow-sm card-hover bg-card border border-border/50 cursor-pointer",
        className
      )}
      onClick={onClick}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="aspect-video overflow-hidden bg-accent/10">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
      </div>
      
      <div className="p-5">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{description}</p>
          </div>
          
          <div className="flex gap-2 ml-2">
            {githubUrl && (
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-foreground/70 hover:text-primary transition-colors"
                aria-label="View GitHub repository"
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={18} />
              </a>
            )}
            
            {liveUrl && (
              <a 
                href={liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-foreground/70 hover:text-primary transition-colors"
                aria-label="View live site"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <motion.span 
              key={index} 
              className="px-2 py-1 text-xs font-medium rounded-md bg-accent/50 text-accent-foreground"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
      
      <motion.div 
        className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
        initial={{ scale: 0 }}
        whileHover={{ scale: 1.1 }}
      >
        <span className="p-2 inline-block rounded-full bg-white/80 backdrop-blur-sm shadow-sm">
          <ArrowUpRight size={16} className="text-primary" />
        </span>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;