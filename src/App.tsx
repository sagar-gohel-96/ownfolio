import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
// import Contact from './components/Contact';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80, // Adjust for navbar height
              behavior: 'smooth',
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-cyber-black text-white">
      <Navbar />
      <Hero />
      <About />
      {/* <Projects /> */}
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
