import React from 'react';
import { navItems } from './NavItems';

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  element && element.scrollIntoView({ behavior: 'smooth' });
};

 function Navigation () {
  return (
    <nav>
      <ul>
        {navItems.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`} onClick={() => scrollToSection(item.id)}>
              {item.icon} <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
 export default Navigation;