import React, { useRef } from 'react';
import { Navbar, Main, Proyect, ExperienceSection, Profile, Footer } from "./components";

function App() {
  
  const mainRef = useRef(null);
  const proyectRef = useRef(null);
  const experienceRef = useRef(null);
  const profileRef = useRef(null);


  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
     
      <Navbar 
        scrollToSection={scrollToSection}
        refs={{ mainRef, proyectRef, experienceRef, profileRef }}
      />
      
     
      <div ref={mainRef}><Main /></div>
      <div ref={proyectRef}><Proyect /></div>
      <div ref={experienceRef}><ExperienceSection /></div>
      <div ref={profileRef}><Profile /></div>

      <Footer />
    </div>
  );
}
export default App;

