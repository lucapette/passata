import { NavLink } from "react-router-dom";

const navItemStyle = ({ isActive }: { isActive: Boolean }) => {
  return `navbar-item ${isActive ? "is-active" : ""}`;
};

const Navigation = () => {
  return (
    <div className="navbar is-light">
      <div className="navbar-menu">
        <NavLink className={navItemStyle} to="/">
          🍅 Get it done
        </NavLink>
        <NavLink className={navItemStyle} to="/stats">
          📈 Stats
        </NavLink>
        <NavLink className={navItemStyle} to="/settings">
          ⚙️ Settings
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
