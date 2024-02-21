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
      <p>
        {description}
      </p>
      <p>
        <strong>Key Achievements</strong>
        <ul>
          {achievements.map((achievement) => <li>{achievement}</li>)}
        </ul>
      </p>

      <p>
        <strong> Challenges</strong>
        <ul>
          {challenges.map((challenge) => <li>{challenge}</li>)}
        </ul>
      </p>
    </Collapsible>
  )
}

export default Projects;
