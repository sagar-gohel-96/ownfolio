import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  color: string;
}

const Skills: React.FC = () => {
  const frontendSkills: Skill[] = [
    { name: 'React', level: 90, color: '#00f3ff' },
    { name: 'TypeScript', level: 90, color: '#9d4edd' },
    { name: 'Next.js', level: 95, color: '#ff00ff' },
    { name: 'UI/UX (Design)', level: 95, color: '#00f3ff' },
    { name: 'Framer Motion', level: 75, color: '#9d4edd' },
  ];

  const backendSkills: Skill[] = [
    { name: 'Node.js', level: 85, color: '#00f3ff' },
    { name: 'Express', level: 80, color: '#9d4edd' },
    { name: 'MongoDB', level: 75, color: '#ff00ff' },
  ];

  const otherSkills: string[] = [
    'React',
    'Next',
    'TypeScript',
    'Node.js',
    'Express',
    'MongoDB',
    'Supabase',
    'Plasmo (Chrome extension)',
    'CI/CD',
    'Git',
    'Redux',
    'Zustand',
    'Jira',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: (i: number) => ({
      width: `${i}%`,
      opacity: 1,
      transition: { duration: 1, ease: 'easeOut' },
    }),
  };

  return (
    <section
      id="skills"
      className="py-20 relative overflow-hidden bg-cyber-dark"
    >
      <div className="absolute inset-0 grid-background opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-cyber text-neon-blue mb-4">
            Technical Skills
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            My technical toolkit includes a wide range of modern technologies
            for building immersive digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-cyber text-neon-purple mb-6">
              Frontend Development
            </h3>

            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {frontendSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-cyber-black rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: skill.color }}
                      custom={skill.level}
                      variants={itemVariants}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-cyber text-neon-blue mb-6">
              Backend Development
            </h3>

            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {backendSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-cyber-black rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: skill.color }}
                      custom={skill.level}
                      variants={itemVariants}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-xl font-cyber text-neon-pink mb-6 text-center">
            Other Technologies & Tools
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {otherSkills.map((skill, index) => (
              <motion.span
                key={skill}
                className="skill-pill"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 15px rgba(0, 243, 255, 0.5)',
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
