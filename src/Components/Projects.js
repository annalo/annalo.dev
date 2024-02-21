import Section from './Section';
import data from "./Projects.json";
import ProjectsItem from "./ProjectsItem";

function Projects() { 
  return (
    <Section id='projects'>
      <h2>Projects</h2>

      <h3>Fullstack</h3>      
      {data.backend.map((item, idx) => <ProjectsItem key={`backend-${idx}`} {...item} />)}

      <h3>Frontend</h3>
      {data.frontend.map((item, idx) => <ProjectsItem key={`frontend-${idx}`} {...item} />)}

      <h3>Backend</h3>
      {data.frontend.map((item, idx) => <ProjectsItem key={`fullstack-${idx}`} {...item} />)}

      <h3>CMS</h3>
      {data.cms.map((item, idx) => <ProjectsItem key={`cms-${idx}`} {...item} />)}
  </Section>
  )
}

export default Projects;
