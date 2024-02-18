import './Portfolio.css';

import Sidebar from '../Sidebar/Sidebar';
import Experience from '../Experience/Experience';
import Projects from '../Projects/Projects'

function Portfolio() {
  return (
    <div className="Portfolio">
      <Sidebar />
      
      <div className="Portfolio-container">
        <Experience />
        <Projects />
      </div>
    </div>
  );
}

export default Portfolio;
