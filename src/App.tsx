import "bulma/css/bulma.min.css";
import { Footer, Content, Section } from "react-bulma-components";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <>
      <div className="wrap">
        <Navigation></Navigation>
        <Section>
          <Content>Yo</Content>
        </Section>
      </div>
      <Footer></Footer>
    </>
  );
};

export default App;
