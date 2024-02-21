import Collapsible from 'react-collapsible';

function Projects({
  name,
  description,
  achievements,
  challenges,
  technologies
}) {
  return (
    <Collapsible trigger={name}>
      <div className='ProjectsItem-description'>
        {description}
      </div>

      <div className='ProjectsItem-keyAchievments'>
        <strong>Key Achievements</strong>
        <ul>
          {achievements.map((achievement, idx) => <li key={`achievement-${idx}`} >{achievement}</li>)}
        </ul>
      </div>

      <div className='ProjectsItem-challenges'>
        <strong> Challenges</strong>
        <ul>
          {challenges.map((challenge, idx) => <li key={`achievement-${idx}`} >{challenge}</li>)}
        </ul>
      </div>
    </Collapsible>
  )
}

export default Projects;
