import './Portfolio.css';
import Experience from '../Experience/Experience';

function Portfolio() {
  return (
    <div className="Portfolio">
      <div className="Portfolio-column Portfolio-sidebar">
        <h1>Anna Lo</h1>
      </div>
      <div className="Portfolio-column Portfolio-main">
        <Experience />
      </div>
    </div>
  );
}

export default Portfolio;
