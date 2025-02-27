import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log(formState);
    alert('Message sent successfully!');
    setFormState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="text-neon-blue" size={24} />,
      title: 'Email',
      value: 'sagargohel879@gmail.com',
      link: 'mailto:sagargohel879@gmail.com',
    },
    {
      icon: <Phone className="text-neon-purple" size={24} />,
      title: 'Phone',
      value: '+91 63558 55954',
      link: 'tel:+916355855954',
    },
    {
      icon: <MapPin className="text-neon-pink" size={24} />,
      title: 'Location',
      value: 'Ahmedabad, India',
      link: '#',
    },
  ];

  const inputVariants = {
    focused: {
      boxShadow: '0 5px 15px -5px rgba(0, 243, 255, 0.5)',
      borderColor: '#00f3ff',
      transition: { duration: 0.3 },
    },
    unfocused: {
      boxShadow: '0 5px 10px -5px rgba(0, 243, 255, 0.3)',
      borderColor: 'rgba(0, 243, 255, 0.5)',
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-neon-blue opacity-5 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-neon-purple opacity-5 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-cyber text-neon-blue mb-4">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <motion.a
              href={info.link}
              key={info.title}
              className="glass-panel neon-border p-6 text-center hover:bg-cyber-dark transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="w-12 h-12 rounded-full bg-cyber-dark flex items-center justify-center mx-auto mb-4">
                {info.icon}
              </div>
              <h3 className="text-lg font-cyber text-white mb-2">
                {info.title}
              </h3>
              <p className="text-gray-300">{info.value}</p>
            </motion.a>
          ))}
        </div>

        <div className="glass-panel neon-border p-8">
          <motion.form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <motion.input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formState.name}
                onChange={handleChange}
                className="input-field"
                required
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                variants={inputVariants}
                animate={focusedField === 'name' ? 'focused' : 'unfocused'}
              />
            </div>

            <div>
              <motion.input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formState.email}
                onChange={handleChange}
                className="input-field"
                required
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                variants={inputVariants}
                animate={focusedField === 'email' ? 'focused' : 'unfocused'}
              />
            </div>

            <div className="md:col-span-2">
              <motion.input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formState.subject}
                onChange={handleChange}
                className="input-field"
                required
                onFocus={() => setFocusedField('subject')}
                onBlur={() => setFocusedField(null)}
                variants={inputVariants}
                animate={focusedField === 'subject' ? 'focused' : 'unfocused'}
              />
            </div>

            <div className="md:col-span-2">
              <motion.textarea
                name="message"
                placeholder="Your Message"
                value={formState.message}
                onChange={handleChange}
                className="input-field min-h-[150px] resize-none"
                required
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                variants={inputVariants}
                animate={focusedField === 'message' ? 'focused' : 'unfocused'}
              />
            </div>

            <div className="md:col-span-2 text-center">
              <motion.button
                type="submit"
                className="neon-button inline-flex items-center"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={16} className="mr-2" />
                Send Message
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
