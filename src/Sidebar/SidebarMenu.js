import './SidebarMenu.css';
import { useContext } from 'react';
import { ScrollContext } from '../ScrollProvider';

function SidebarMenu () {
  const { activeSection } = useContext(ScrollContext);

  return (
    <aside className="SidebarMenu">
      <ul>
        <li className={activeSection === 'about' ? 'active' : ''}>
          <a href="#about">About</a>
        </li>
        <li className={activeSection === 'experience' ? 'active' : ''}>
          <a href="#experience">Experience</a>
        </li>
        <li className={activeSection === 'projects' ? 'active' : ''}>
          <a href="#projects">Projects</a>
        </li>
      </ul>
    </aside>
  )
}

export default SidebarMenu;
