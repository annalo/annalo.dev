import './ExperienceItem.css';
import SkillsBadge from './SkillsBadge'

function ExperienceItem({
  employer,
  dateRange, 
  description,
  location,
  skills,
  title
}) {
  return (
    <div className="ExperienceItem">
      <div className="ExperienceItem-dateRange">{dateRange}</div>

      <div className='ExperienceItem-details'>
        <div className="ExperienceItem-title">{title}</div>
        <div className="ExperienceItem-company">
          {employer + " // " + location}
        </div>
        <div className="ExperienceItem-description">{description}</div>
        <div className="ExperienceItem-skills">
          {skills.map(skill => <SkillsBadge key={skill} skill={skill} />)}
        </div>
      </div>
    </div>
  );
}

export default ExperienceItem;
