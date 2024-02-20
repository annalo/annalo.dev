import './Experience.css';
import Section from './Section';
import ExperienceItem from './ExperienceItem';
import data from './Experiences.json';

function Experience() {
  return (
    <Section id="experience">
      <h4>Experience</h4>

      {data.experiences.map((item, idx) => (
        <ExperienceItem key={`experienceItem${idx}`} {...item} />
      ))}
    </Section>
  );
}

export default Experience;
