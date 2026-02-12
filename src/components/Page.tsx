import { useEffect } from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";

type PageProps = {
  title: string;
  children?: React.ReactNode;
};

const Page: React.FC<PageProps> = (props) => {
  useEffect(() => {
    document.title = props.title || "";
  }, [props.title]);
  return (
    <>
      <div className="wrap">
        <Navigation></Navigation>
        {props.children}
      </div>
      <Footer />
    </>
  );
};

export default Page;
