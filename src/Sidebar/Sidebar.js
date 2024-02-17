import './Sidebar.css';

function Sidebar () {
  return (
    <div className="Sidebar">
      <div className="Sidebar-name">Anna Lo</div>
      <div className="Sidebar-title">Software Engineer</div>

      <div className="Sidebar-menu">
        <div Sidebar-item>About</div>
        <div Sidebar-item>Experience</div>
        <div Sidebar-item>Projects</div>
      </div>
    </div>
  )
}

export default Sidebar;
