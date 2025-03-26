import React, { useState } from 'react';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface QualificationItem {
  title: string;
  organization: string;
  duration: string;
  description: string;
  location?: string;
}

const Qualifications: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'education' | 'experience'>('education');
  
  const education: QualificationItem[] = [
    {
      title: 'Master in Computer Science',
      organization: 'Massachusetts Institute of Technology',
      location: 'Cambridge, MA',
      duration: '2020 - 2022',
      description: 'Research focused on advanced web technologies and user interface optimization.',
    },
    {
      title: 'Bachelor in Computer Engineering',
      organization: 'Harvard University',
      location: 'Cambridge, MA',
      duration: '2016 - 2020',
      description: 'Specialized in software engineering with a focus on web and mobile application development.',
    },
    {
      title: 'Online Certifications',
      organization: 'Various Platforms',
      duration: '2018 - Present',
      description: 'Continuously expanding knowledge through courses on platforms like Coursera, Udemy, and FreeCodeCamp.',
    },
  ];
  
  const experience: QualificationItem[] = [
    {
      title: 'Senior Frontend Developer',
      organization: 'Tech Innovate Inc.',
      location: 'San Francisco, CA',
      duration: '2022 - Present',
      description: 'Leading frontend development for enterprise SaaS applications with React and NextJS.',
    },
    {
      title: 'Frontend Developer',
      organization: 'Digital Solutions LLC',
      location: 'New York, NY',
      duration: '2020 - 2022',
      description: 'Developed responsive web applications and implemented UI/UX improvements that increased user engagement by 40%.',
    },
    {
      title: 'Junior Web Developer',
      organization: 'WebCraft Agency',
      location: 'Boston, MA',
      duration: '2018 - 2020',
      description: 'Created and maintained websites for clients across various industries using modern web technologies.',
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };
  
  const activeData = activeTab === 'education' ? education : experience;

  return (
    <motion.section 
      id="qualifications" 
      className="py-20 bg-gradient-to-b from-secondary/30 to-transparent overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle="My Journey"
          title="Education & Experience"
          description="My academic and professional journey in the field of web development and software engineering."
        />
        
        <div className="flex justify-center mt-12 mb-10">
          <div className="inline-flex p-1 rounded-xl bg-white shadow-lg">
            <motion.button
              className={cn(
                "flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300",
                activeTab === 'education'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-muted-foreground hover:text-primary'
              )}
              onClick={() => setActiveTab('education')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <GraduationCap className="w-5 h-5" />
              <span>Education</span>
            </motion.button>
            
            <motion.button
              className={cn(
                "flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300",
                activeTab === 'experience'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-muted-foreground hover:text-primary'
              )}
              onClick={() => setActiveTab('experience')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Briefcase className="w-5 h-5" />
              <span>Experience</span>
            </motion.button>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto mt-16">
          <div className="relative">
            {/* Main timeline line with gradient and glow */}
            <div className="absolute left-1/2 md:top-4 bottom-4 transform -translate-x-1/2">
              {/* Solid line */}
              <div className="absolute inset-0 w-0.5 bg-gradient-to-b from-transparent via-primary to-transparent" />
            </div>
            
            <div className="space-y-12">
              {activeData.map((item, index) => (
                <motion.div 
                  key={item.title}
                  className={cn(
                    "relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16",
                    index % 2 === 0 ? "md:text-right" : ""
                  )}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  custom={index}
                >
                  <div className={cn(
                    "relative p-6 bg-white rounded-xl shadow-lg border border-border/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
                    index % 2 === 0 
                      ? "md:col-span-1" 
                      : "md:col-start-2"
                  )}>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                      <div className="flex items-center gap-2 text-primary font-medium">
                        <span>{item.organization}</span>
                        {item.location && (
                          <>
                            <span className="text-muted-foreground">•</span>
                            <span className="text-muted-foreground text-sm">{item.location}</span>
                          </>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                        <Calendar className="w-4 h-4" />
                        <span>{item.duration}</span>
                      </div>
                      <p className="mt-3 text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Enhanced timeline dot with multiple layers and animations */}
                  <motion.div 
                    className="absolute left-1/2 top-8 -translate-x-1/2 z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="relative hidden md:flex flex items-center justify-center">
                      {/* Outer glow */}
                      <div className="absolute w-8 h-8 rounded-full bg-primary/10 animate-pulse" />
                      {/* Ping animation */}
                      <div className="absolute w-6 h-6 rounded-full bg-primary/20 animate-ping" />
                      {/* Inner circle with gradient */}
                      <div className="absolute w-5 h-5 rounded-full bg-gradient-to-tr from-primary to-primary-foreground animate-pulse" />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Qualifications;