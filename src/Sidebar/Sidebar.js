import './Sidebar.css';

function Sidebar () {
  return (
    <div>
      <div className="Sidebar-name">Anna Lo</div>
      <div className="Sidebar-title">Software Developer</div>
      <div className="Sidebar-summary">
        <p>
          👋 I'm a <strong>software engineer</strong> with 8+ years of experience, 
          specializing in full-stack development with <strong>JavaScript</strong>, <strong>React</strong>, <strong>GraphQL</strong>, <strong>Ruby on Rails</strong>, 
          and <strong>Elixir</strong>. Additionally, I'm skilled in CMS products 
          like <strong>Wordpress</strong> and <strong>Webflow</strong>. I approach 
          software holistically, considering all aspects of a project to 
          create robust and effective solutions.
        </p>
      </div>

      <div className="Sidebar-menu">
        <div Sidebar-item>About</div>
        <div Sidebar-item>Experience</div>
        <div Sidebar-item>Projects</div>
      </div>
    </div>
  )
}

export default Sidebar;
