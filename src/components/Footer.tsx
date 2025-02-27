import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Code } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      icon: <Github size={20} />,
      url: 'https://github.com/sagar-gohel-96',
      label: 'GitHub',
    },
    {
      icon: <Linkedin size={20} />,
      url: 'https://www.linkedin.com/in/sagargohel96/',
      label: 'LinkedIn',
    },
  ];

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-cyber-dark py-12 relative overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <motion.div
            className="flex items-center space-x-2 mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Code className="text-neon-blue" size={28} />
            <span className="text-xl font-cyber text-neon-blue">
              REACT<span className="text-neon-purple">DEV</span>
            </span>
          </motion.div>

          <motion.div
            className="flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                className="w-10 h-10 rounded-full bg-cyber-black flex items-center justify-center text-gray-400 hover:text-neon-blue transition-colors duration-300"
                aria-label={link.label}
                whileHover={{
                  scale: 1.1,
                  boxShadow: '0 0 10px rgba(0, 243, 255, 0.5)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="text-gray-400 text-sm mb-4 md:mb-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            &copy; {new Date().getFullYear()} Reactdev. All rights reserved.
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-x-6 gap-y-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-neon-blue transition-colors duration-300 text-sm"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
