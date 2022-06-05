import WhatWeDoAccordion from "../../components/WhatWeDoAccordion/WhatWeDoAccordion";
import Brands from "./Brands/Brands";
import Projects from "./Projects/Projects";
import SeeProjectsLink from "./SeeProjectsLink/SeeProjectsLink";
const Main = () => {
  return (
    <main>
      <WhatWeDoAccordion />
      <Projects />
      <SeeProjectsLink />
      <Brands />
    </main>
  );
};

export default Main;
