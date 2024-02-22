import './Portfolio.css';
import { ScrollProvider } from './ScrollProvider';

import SidebarMenu from './SidebarMenu';
import Contacts from './Contacts';
import About from './About';
import Experience from './Experience';
import Projects from './Projects'

function Portfolio() {
  return (
    <ScrollProvider>
      <div className="Portfolio">
        <div className='Portfolio-sidebar'>
          <div className="Portfolio-sidebar-name">
            Anna Lo
            <div className="Portfolio-sidebar-name-title">Software Engineer</div>
          </div>
          <SidebarMenu />
          <Contacts />
        </div>
        
        <div className="Portfolio-main">
          <About />
          <Experience/>
          <Projects />
        </div>
      </div>
    </ScrollProvider>
  );
}

export default Portfolio;
