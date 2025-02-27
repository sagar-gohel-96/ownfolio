import React from 'react';
import { motion } from 'framer-motion';
import { User, Calendar, MapPin, Briefcase } from 'lucide-react';
import { ProfileImg } from '.';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-cyber text-neon-blue mb-4">
            About Me
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-2/5 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-lg bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 animate-pulse-slow blur-md"></div>
              <img
                src={ProfileImg}
                alt="Developer working"
                className="rounded-lg relative z-10 glass-panel p-2"
              />
              <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-cyber-dark rounded-lg neon-border flex items-center justify-center animate-float">
                <span className="text-neon-blue font-cyber text-xl">2+</span>
                <span className="text-xs text-gray-400 ml-1">
                  Years
                  <br />
                  Exp.
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-2xl font-cyber text-neon-purple mb-4"
              variants={itemVariants}
            >
              Full Stack Developer & UI/UX Specialist
            </motion.h3>

            <motion.p className="text-gray-300 mb-6" variants={itemVariants}>
              I'm a passionate developer with expertise in creating immersive
              digital experiences. My journey in tech began 3 years ago, and
              I've been pushing the boundaries of web development ever since.
            </motion.p>

            <motion.p className="text-gray-300 mb-8" variants={itemVariants}>
              I specialize in React, Node.js, and modern front-end frameworks,
              with a keen eye for futuristic UI/UX design. My goal is to blend
              cutting-edge technology with stunning visuals to create memorable
              digital experiences.
            </motion.p>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
              variants={itemVariants}
            >
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-neon-blue bg-opacity-10 flex items-center justify-center mr-3">
                  <User className="text-neon-blue" size={18} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Name</p>
                  <p className="text-white">Sagar Gohel</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-neon-purple bg-opacity-10 flex items-center justify-center mr-3">
                  <Calendar className="text-neon-purple" size={18} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Experience</p>
                  <p className="text-white">2+ Years</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-neon-pink bg-opacity-10 flex items-center justify-center mr-3">
                  <MapPin className="text-neon-pink" size={18} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white">Ahmedabad, India</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-neon-blue bg-opacity-10 flex items-center justify-center mr-3">
                  <Briefcase className="text-neon-blue" size={18} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Available for</p>
                  <p className="text-white">Freelance</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <a href="#contact" className="neon-button">
                Get In Touch
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
