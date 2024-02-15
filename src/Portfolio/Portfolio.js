import './Portfolio.css';
import About from '../About/About';
import Experience from '../Experience/Experience';

function Portfolio() {
  return (
    <div className="Portfolio">
      <div className="Portfolio-column Portfolio-sidebar">
        <h1>Anna Lo</h1>
        <About />
      </div>
      <div className="Portfolio-column Portfolio-main">
        <Experience />
      </div>
    </div>
  );
}

export default Portfolio;
