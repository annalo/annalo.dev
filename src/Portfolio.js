import './Portfolio.css';
import About from './About';

function Portfolio() {
  return (
    <div className="Portfolio">
      <div className="Portfolio-column Portfolio-sidebar">
        <h1>Anna Lo</h1>
      </div>
      <div className="Portfolio-column Portfolio-main">
        <About />
      </div>
    </div>
  );
}

export default Portfolio;
