import { Content, Footer as BulmaFooter, Level } from "react-bulma-components";

const Footer = () => {
  return (
    <BulmaFooter>
      <Level>
        <Level.Side align="left">
          <Level.Item>
            <Content>
              Built with ♥️ by <a href="https://lucapette.me">lucapette</a>
            </Content>
          </Level.Item>
        </Level.Side>
      </Level>
    </BulmaFooter>
  );
};

export default Footer;
