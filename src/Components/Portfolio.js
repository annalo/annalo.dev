import './Portfolio.css';
import { ScrollProvider } from './ScrollProvider';

import SidebarMenu from './SidebarMenu'
import About from './About';
import Experience from './Experience';
// import Projects from './Projects'

function Portfolio() {
  return (
    <ScrollProvider>
      <div className="Portfolio">
        <div className='Portfolio-sidebar'>
          <div className="Portfolio-sidebar-name">Anna Lo</div>
          <div className="Portfolio-sidebar-title">Software Engineer</div>
          <SidebarMenu />
        </div>
        
        <div className="Portfolio-main">
          <About />
          <Experience/>
          {/* <Projects /> */}
        </div>
      </div>
    </ScrollProvider>
  );
}

export default Portfolio;
