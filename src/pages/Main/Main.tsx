import WhatWeDoAccordion from "../../components/WhatWeDoAccordion/WhatWeDoAccordion";
import Brands from "../../components/Brands/Brands";
import Projects from "./Projects/Projects";
import SeeProjectsLink from "../../components/SeeProjectsLink/SeeProjectsLink";
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
