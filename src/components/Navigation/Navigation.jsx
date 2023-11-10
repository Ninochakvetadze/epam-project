import React, { useEffect, useState } from 'react';
import { navItems } from './NavItems';

const scrollToSection = (event, sectionId) => {
  event.preventDefault();
  const element = document.getElementById(sectionId);
  element && element.scrollIntoView({ behavior: 'smooth' });
};

const Navigation = () => {
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = document.querySelectorAll('section'); // Change 'nav' to 'section' if your sections are using the section tag

      sections.forEach((sec) => {
        const offset = sec.offsetTop;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (scrollY >= offset && scrollY < offset + height) {
          setActiveItem(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav>
      <ul>
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              // style={{
              //   color: activeItem === item.id ? '#26c07d' : '#667081',
              // }}
            >
              {item.icon} <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
