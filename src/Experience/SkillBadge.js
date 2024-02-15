import './SkillBadge.css';

function SkillBadge({skill}) {
  return (
    <span className="SkillBadge" key={skill}>{skill}</span>
  )
}

export default SkillBadge;
