import './Experience.css';
import ExperienceItem from './ExperienceItem';
import data from './Experiences.json';

function Experience() {
  return (
    <div className="Experience">
      {data.experiences.map((item, idx) => (
        <ExperienceItem key={`experienceItem${idx}`} {...item} />
      ))}
    </div>
  );
}

export default Experience;
