import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { HeroImg } from '.';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create particles
    if (containerRef.current) {
      const container = containerRef.current;
      const particleCount = 20;

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Random size between 2-6px
        const size = Math.random() * 4 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;

        // Random animation delay
        particle.style.animationDelay = `${Math.random() * 5}s`;

        container.appendChild(particle);
      }
    }
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 0.8,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      ref={containerRef}
    >
      <div className="absolute inset-0 grid-background"></div>

      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-between">
        <motion.div
          className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-neon-blue font-cyber text-xl mb-2"
            custom={0}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Hello World, I'm
          </motion.h2>

          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 neon-text"
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Sagar Gohel
          </motion.h1>

          <motion.div
            className="h-1 w-20 bg-gradient-to-r from-neon-blue to-neon-purple mb-6 md:mx-0 mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          ></motion.div>

          <motion.h3
            className="text-2xl md:text-3xl mb-6 text-gray-300"
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Software Engineer
          </motion.h3>

          <motion.p
            className="text-gray-400 mb-8 max-w-lg md:mx-0 mx-auto"
            custom={3}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Building futuristic digital experiences with cutting-edge
            technologies. Specializing in React,Next, Node.js, and immersive
            UI/UX design.
          </motion.p>

          <motion.div
            className="flex space-x-4 justify-center md:justify-start"
            custom={4}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <a
              href="#contact"
              className="neon-button"
              style={{
                borderColor: '#9d4edd',
                color: '#9d4edd',
                boxShadow: '0 0 5px rgba(157, 78, 221, 0.5)',
              }}
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Holographic avatar container */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 animate-pulse-slow"></div>
            <div
              className="absolute inset-2 rounded-full bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 animate-pulse-slow"
              style={{ animationDelay: '0.5s' }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={HeroImg}
                alt="Developer Avatar"
                className="w-56 h-56 md:w-72 md:h-72 rounded-full object-contain"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 mix-blend-overlay"></div>
            </div>

            {/* Orbiting elements */}
            <motion.div
              className="absolute w-6 h-6 rounded-full bg-neon-blue/30"
              animate={{
                rotate: 360,
                x: [0, 20, 0, -20, 0],
                y: [0, 20, 40, 20, 0],
              }}
              transition={{
                rotate: { duration: 10, repeat: Infinity, ease: 'linear' },
                x: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
                y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
              }}
              style={{
                left: 'calc(50% - 3px)',
                top: '-10px',
                boxShadow: '0 0 10px rgba(0, 243, 255, 0.5)',
              }}
            />

            <motion.div
              className="absolute w-4 h-4 rounded-full bg-neon-purple/30"
              animate={{
                rotate: 360,
                x: [0, -30, 0, 30, 0],
                y: [0, 30, 60, 30, 0],
              }}
              transition={{
                rotate: { duration: 8, repeat: Infinity, ease: 'linear' },
                x: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
              }}
              style={{
                right: '10px',
                top: '50%',
                boxShadow: '0 0 10px rgba(157, 78, 221, 0.5)',
              }}
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <a
            href="#about"
            className="flex flex-col items-center text-gray-400 hover:text-neon-blue transition-colors duration-300"
          >
            <span className="text-sm mb-2 font-cyber">Scroll Down</span>
            <ChevronDown size={20} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
