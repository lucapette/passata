import { Navbar } from "react-bulma-components";
import { NavLink } from "react-router-dom";

const navItemStyle = ({ isActive }: { isActive: Boolean }) => {
  return `navbar-item ${isActive ? "is-active" : ""}`;
};

const Navigation = () => {
  return (
    <Navbar color="light">
      <Navbar.Container>
        <Navbar.Menu>
          <NavLink className={navItemStyle} to="/">
            🍅 Get it done
          </NavLink>
          <NavLink className={navItemStyle} to="/stats">
            📈 Stats
          </NavLink>
        </Navbar.Menu>
      </Navbar.Container>
    </Navbar>
  );
};

export default Navigation;
