import './Sidebar.css';
import SidebarMenu from './SidebarMenu';

function Sidebar () {
  return (
    <div className="Sidebar">
      <div className="Sidebar-name">Anna Lo</div>
      <div className="Sidebar-title">Software Engineer</div>

      <SidebarMenu />
    </div>
  )
}

export default Sidebar;
