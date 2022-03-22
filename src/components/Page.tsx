import { useEffect } from "react";
import { Content, Section } from "react-bulma-components";
import Footer from "./Footer";
import Navigation from "./Navigation";

type PageProps = {
  title: string;
};

const Page: React.FC<PageProps> = (props) => {
  useEffect(() => {
    document.title = props.title || "";
  }, [props.title]);
  return (
    <>
      <div className="wrap">
        <Navigation></Navigation>
        <Section>
          <Content>{props.children}</Content>
        </Section>
      </div>
      <Footer />
    </>
  );
};

export default Page;
