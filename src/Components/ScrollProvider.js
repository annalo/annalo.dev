import { createContext, useEffect, useRef, useState } from 'react';

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState(null);
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = Object.keys(sectionRefs.current).map((key) => sectionRefs.current[key].current);
      let currentSection = null;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.offsetTop <= scrollPosition + 200) {
          currentSection = section.id;
          break;
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ activeSection, setActiveSection, sectionRefs }}>
      {children}
    </ScrollContext.Provider>
  );
};
