import './Portfolio.css';
import Sidebar from '../Sidebar/Sidebar';
import About from '../About/About';
import Experience from '../Experience/Experience';

function Portfolio() {
  return (
    <div className="Portfolio">
      <div className="Portfolio-sidebar">
          <Sidebar />
      </div>
      
      <div className="Portfolio-container">
        <About />
        <Experience />
      </div>
    </div>
  );
}

export default Portfolio;
