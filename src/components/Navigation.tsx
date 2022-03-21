import { Navbar } from "react-bulma-components";

const Navigation = () => {
  return (
    <Navbar>
      <Navbar.Container>
        <Navbar.Menu>
          <Navbar.Item>🍅 Get it done</Navbar.Item>
          <Navbar.Item>📈 Stats</Navbar.Item>
        </Navbar.Menu>
      </Navbar.Container>
    </Navbar>
  );
};

export default Navigation;
