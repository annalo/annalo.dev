import './SkillsBadge.css';

function SkillsBadge({skill}) {
  return (
    <span className="SkillsBadge" key={skill}>{skill}</span>
  )
}

export default SkillsBadge;
