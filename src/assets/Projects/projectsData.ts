import HigoSrc from "./imagesProjects/bankingHigoWorks.png";
import KycSrc from "./imagesProjects/worksKyc.png";
import IntroducerSrc from "./imagesProjects/worksIntroducer.png";
import AutomatedStorerSrc from "./imagesProjects/worksAutomatedStore.png";
import PhotonSrc from "./imagesProjects/worksPhoton.png";
import MagicGalaxySrc from "./imagesProjects/worksMagicGalaxy.png";
import { ProjectProps } from "../../sharedTypes/sharedProject";
export const projectsData: ProjectProps[] = [
  {
    h1Text: "HEALTHCARE",
    h2Text: "Higo",
    text: "Small medical device and telemedical solution",
    technologies: ["HARDWARE", "DESIGN", "UI/UX", "IOS", "ANDROID", "WEB"],
    backgroundUrl: HigoSrc,
  },
  {
    h1Text: "BANKING",
    h2Text: "KYC",
    text: "Small medical device and telemedical solution",
    technologies: ["UI/UX", "IOS", "ANDROID", "WEB"],
    backgroundUrl: KycSrc,
  },
  {
    h1Text: "BANKING",
    h2Text: "Introducer",
    text: "Entire system allowing Vendors to integrate their services with Issuers who wants to serve their Clients.",
    technologies: ["DESIGN", "UI/UX", "WEB"],
    backgroundUrl: IntroducerSrc,
  },

  {
    h1Text: "RETAIL",
    h2Text: "Automated Store",
    text: "Stores that offer next level customer experience.",
    technologies: ["DESIGN", "UI/UX", "IOS", "ANDROID"],
    backgroundUrl: AutomatedStorerSrc,
  },

  {
    h1Text: "ENTERTAINMENT",
    h2Text: "Photon",
    text: "Interactive, educational robot for younger and older kids",
    technologies: ["DESIGN", "HARDWARE"],
    backgroundUrl: PhotonSrc,
  },
  {
    h1Text: "CORPORATE",
    h2Text: "Coca-Cola Magic Galaxy",
    text: "An application supporting the recruitment processes for projects within the company, inspecting projects and their results other departments in the world of this company.",
    technologies: ["DESIGN", "UI/UX", "IOS", "ANDROID", "WEB"],
    backgroundUrl: MagicGalaxySrc,
  },
];
