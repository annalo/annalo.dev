import './Portfolio.css';
import Experience from '../Experience/Experience';

function Portfolio() {
  return (
    <div className="Portfolio">
      <div className="Portfolio-column Portfolio-sidebar">
      <div className="Portfolio-column Portfolio-main">
        <h1>Anna Lo</h1>
      </div>
        <Experience />
      </div>
    </div>
  );
}

export default Portfolio;
