import './Experience.css';
import ExperienceItem from './ExperienceItem';
import data from './Experiences.json';

function Experience() {
  return (
    <div className="Experience">
      {data.experiences.map((item) => (
        <ExperienceItem {...item} />
      ))}
    </div>
  );
}

export default Experience;
