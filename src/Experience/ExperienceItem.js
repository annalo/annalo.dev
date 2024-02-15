import './ExperienceItem.css';

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

      <div className="ExperienceItem-title">
        <strong>{title}</strong>
      </div>

      <div className="ExperienceItem-employer">
        <em>{employer} / {location}</em>
      </div>

      <div className="ExperienceItem-description">
        hello
        <text>{description}</text>
      </div>

      <div className="ExperienceItem-skills">
        {skills.map(skill => <span>{skill}</span>)}
      </div>






        
        
        
        
    </div>
  );
}

export default ExperienceItem;
