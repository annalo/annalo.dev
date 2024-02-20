import './Experience.css';
import ExperienceItem from './ExperienceItem';
import data from './Experiences.json';

function Experience() {
  return (
    <section id="experience" className="Experience">
      <h4>Experience</h4>

      {data.experiences.map((item, idx) => (
        <ExperienceItem key={`experienceItem${idx}`} {...item} />
      ))}
    </section>
  );
}

export default Experience;
