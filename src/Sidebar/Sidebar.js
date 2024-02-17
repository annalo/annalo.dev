import './Sidebar.css';
import SideBarMenu from './SidebarMenu';

function Sidebar () {
  return (
    <div className="Sidebar">
      <div className="Sidebar-name">Anna Lo</div>
      <div className="Sidebar-title">Software Engineer</div>

      <SideBarMenu />
    </div>
  )
}

export default Sidebar;
