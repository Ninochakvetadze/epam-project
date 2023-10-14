import React from 'react';
import { FaUser, FaGraduationCap, FaBriefcase, FaComment, FaLocationArrow, FaPencilAlt } from 'react-icons/fa';

export function Navigation () {
  return (
    <nav>
      <ul>
        <li><a href="#about"><FaUser /> About Me</a></li>
        <li><a href="#education"><FaGraduationCap /> Education</a></li>
        <li><a href="#experience"><FaPencilAlt /> Experience</a></li>
        <li><a href="#portfolio"><FaBriefcase /> Portfolio</a></li>
        <li><a href="#contacts"><FaLocationArrow /> Contacts</a></li>
        <li><a href="#feedback"><FaComment /> Feedback</a></li>
      </ul>
    </nav>
  );
};

