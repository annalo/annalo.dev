import './ProjectsItem.css';
import { useState } from 'react';

function ProjectsItem({
  name,
  description,
  achievements,
  challenges,
  technologies
}) {
  const [showContent, setContent] = useState(false);
  const showContentHandler = () => {
    setContent(!showContent);
  };

  return (
    <div className='ProjectsItem'>
      <h5>{name}</h5>
      <div className='ProjectsItem-description'>
        {description}
      </div>

      {showContent ? (
        <p className='ProjectsItem-content'>
          <strong>Key Achievements</strong>
          <ul>
            {achievements.map((achievement, idx) => <li key={`achievement-${idx}`} >{achievement}</li>)}
          </ul>
          {/* <strong>Challenges</strong>
          <ul>
            {challenges.map((challenge, idx) => <li key={`achievement-${idx}`} >{challenge}</li>)}
          </ul> */}
        </p>
      ) : null}

      <a onClick={showContentHandler}>
        Read {showContent ? "Less ↑" : "More →"} 
     </a>
    </div>
  )
}

export default ProjectsItem;
