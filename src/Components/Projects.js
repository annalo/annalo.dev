import Section from './Section';
import data from "./Projects.json";
import ProjectsItem from "./ProjectsItem";

function Projects() { 
  return (
    <Section id='projects'>
      <h2>Projects</h2>

      <h4>Fullstack</h4>      
      {data.backend.map((item, idx) => <ProjectsItem key={`backend-${idx}`} {...item} />)}

      <h4>Frontend</h4>
      {data.frontend.map((item, idx) => <ProjectsItem key={`frontend-${idx}`} {...item} />)}

      <h4>Backend</h4>
      {data.frontend.map((item, idx) => <ProjectsItem key={`fullstack-${idx}`} {...item} />)}

      <h4>CMS</h4>
      {data.cms.map((item, idx) => <ProjectsItem key={`cms-${idx}`} {...item} />)}
  </Section>
  )
}

export default Projects;
