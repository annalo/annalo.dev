import './Portfolio.css';
import About from '../About/About';
import Experience from '../Experience/Experience';

function Portfolio() {
  return (
    <div className="Portfolio">
      <div className="Portfolio-sidebar">
        <div className="Portfolio-name">Anna Lo</div>
        <div className="Portfolio-title">Software Developer</div>
        <About />
      </div>
      <div className="Portfolio-main">
        <Experience />
      </div>
    </div>
  );
}

export default Portfolio;
