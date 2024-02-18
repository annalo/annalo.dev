import './Sidebar.css';
import About from '../About/About';
// import SidebarMenu from './SidebarMenu';

function Sidebar () {
  return (
    <div className="Sidebar">
      <div className="Sidebar-name">Anna Lo</div>
      <div className="Sidebar-title">Software Engineer</div>
      <About />
    </div>
  )
}

export default Sidebar;
