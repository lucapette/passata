import { Navbar } from "react-bulma-components";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar>
      <Navbar.Container>
        <Navbar.Menu>
          <Navbar.Item>
            <Link to="/">🍅 Get it done</Link>
          </Navbar.Item>
          <Navbar.Item>
            <Link to="/stats">📈 Stats</Link>
          </Navbar.Item>
        </Navbar.Menu>
      </Navbar.Container>
    </Navbar>
  );
};

export default Navigation;
