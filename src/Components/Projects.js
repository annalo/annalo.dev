import Section from './Section';
import data from "./Projects.json";
import ProjectsItem from "./ProjectsItem";

function Projects() {
  return (
    <Section id='projects'>
      <h4>Projects</h4>

      <h5>Fullstack</h5>      
      {data.backend.map(item => <ProjectsItem {...item} />)}

      <h5>Frontend</h5>
      {data.frontend.map(item => <ProjectsItem {...item} />)}

      <h5>Backend</h5>
      {data.frontend.map(item => <ProjectsItem {...item} />)}

      <h5>CMS</h5>
      {data.cms.map(item => <ProjectsItem {...item} />)}
  </Section>
  )
}

export default Projects;
