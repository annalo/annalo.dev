import Section from './Section';
import data from "./Projects.json";
import ProjectsItem from "./ProjectsItem";

function Projects() {
  return (
    <Section id='projects'>
      <h2>Projects</h2>

      <h5>Fullstack</h5>      
      {data.backend.map((item, idx) => <ProjectsItem key={`backend-${idx}`} {...item} />)}

      <h5>Frontend</h5>
      {data.frontend.map((item, idx) => <ProjectsItem key={`frontend-${idx}`} {...item} />)}

      <h5>Backend</h5>
      {data.frontend.map((item, idx) => <ProjectsItem key={`fullstack-${idx}`} {...item} />)}

      <h5>CMS</h5>
      {data.cms.map((item, idx) => <ProjectsItem key={`cms-${idx}`} {...item} />)}
  </Section>
  )
}

export default Projects;
