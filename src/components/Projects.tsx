import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  codeLink: string;
}

const Projects: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Neon Dashboard",
      description: "A futuristic admin dashboard with dark mode, interactive charts, and real-time data visualization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 2,
      title: "Cyber Commerce",
      description: "E-commerce platform with a cyberpunk aesthetic, featuring animated product cards and a smooth checkout flow.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["Next.js", "Framer Motion", "Stripe", "Supabase"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 3,
      title: "Neural Chat",
      description: "AI-powered chat application with a futuristic interface and real-time message animations.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Node.js", "Socket.io", "OpenAI"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 4,
      title: "Holo Music",
      description: "Music streaming app with 3D audio visualizations and a neon-themed interface.",
      image: "https://images.unsplash.com/photo-1614149162883-504ce4d13909?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Three.js", "Web Audio API", "Firebase"],
      demoLink: "#",
      codeLink: "#"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-neon-purple opacity-5 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-neon-blue opacity-5 blur-3xl rounded-full"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-cyber text-neon-blue mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore my latest work showcasing innovative designs and cutting-edge technologies.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              className="project-card"
              variants={itemVariants}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="relative overflow-hidden rounded-lg mb-4 h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500"
                  style={{ 
                    transform: hoveredCard === project.id ? 'scale(1.05)' : 'scale(1)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-black to-transparent opacity-70"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-cyber text-white">{project.title}</h3>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, index) => (
                  <span key={index} className="skill-pill">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between">
                <a 
                  href={project.demoLink} 
                  className="flex items-center text-neon-blue hover:text-neon-purple transition-colors duration-300"
                >
                  <ExternalLink size={16} className="mr-1" />
                  <span>Live Demo</span>
                </a>
                <a 
                  href={project.codeLink} 
                  className="flex items-center text-neon-blue hover:text-neon-purple transition-colors duration-300"
                >
                  <Github size={16} className="mr-1" />
                  <span>Source Code</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a href="#" className="neon-button inline-flex items-center">
            <Code size={16} className="mr-2" />
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;