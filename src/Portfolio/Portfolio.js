import './Portfolio.css';
import About from '../About/About';
import Experience from '../Experience/Experience';

function Portfolio() {
  return (
    <div className="Portfolio">
      <div className="Portfolio-sidebar">
        <div className="Portfolio-container">
          <div className="Portfolio-name">Anna Lo</div>
          <div className="Portfolio-title">Software Developer</div>
          <About />
        </div>
      </div>
      
      <div className="Portfolio-container">
        <Experience />
      </div>
    </div>
  );
}

export default Portfolio;
