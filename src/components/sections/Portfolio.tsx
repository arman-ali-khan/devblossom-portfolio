import React, { useState } from 'react';
import SectionTitle from '../common/SectionTitle';
import ProjectCard from '../common/ProjectCard';
import { projects } from '@/data/projectsData';
import { motion } from 'framer-motion';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useIsMobile } from '@/hooks/use-mobile';
import { ScrollArea } from "@/components/ui/scroll-area";

const Portfolio: React.FC = () => {
  const isMobile = useIsMobile();
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  
  return (
    <motion.section 
      id="portfolio" 
      className="py-20 bg-secondary/30"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle="My Work"
          title="Recent Projects"
          description="A selection of my recent web development projects showcasing my technical skills and design capabilities."
        />
        
        <div className="mt-12 relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {projects.map((project, index) => (
                <CarouselItem 
                  key={index} 
                  className={isMobile ? "pl-4 basis-full" : "pl-4 md:basis-1/2 lg:basis-1/3"}
                >
                  <motion.div 
                    className="p-1"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ProjectCard 
                      {...project} 
                      onClick={() => setSelectedProject(project)}
                    />
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex items-center justify-center mt-8 md:mt-0">
              <CarouselPrevious className="relative static md:absolute left-0 mr-2 md:left-[-5%] h-8 w-8 md:h-10 md:w-10 rounded-full" />
              <div className="flex space-x-2 md:hidden">
                {Array.from({ length: Math.min(projects.length, 6) }).map((_, i) => (
                  <div 
                    key={i} 
                    className="w-2 h-2 rounded-full bg-gray-300" 
                  />
                ))}
              </div>
              <CarouselNext className="relative static md:absolute right-0 ml-2 md:right-[-5%] h-8 w-8 md:h-10 md:w-10 rounded-full" />
            </div>
          </Carousel>
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-hidden flex flex-col">
          {selectedProject && (
            <>
              <DialogHeader className="flex-shrink-0">
                <DialogTitle>{selectedProject.title}</DialogTitle>
                <DialogDescription>
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>
              <ScrollArea className="flex-1 pr-4">
                <div className="space-y-4">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-[400px] object-cover rounded-lg"
                  />
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 text-sm font-medium rounded-full bg-accent/50 text-accent-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-end gap-4">
                    {selectedProject.githubUrl && (
                      <a 
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                      >
                        View Code
                      </a>
                    )}
                    {selectedProject.liveUrl && (
                      <a 
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </ScrollArea>
            </>
          )}
        </DialogContent>
      </Dialog>
    </motion.section>
  );
};

export default Portfolio;