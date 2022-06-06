import { SliderData } from "../../../sharedTypes/sliderProps";
import MedicalSrc from "./careerSliderImages/careerMedical.jpg";
import OfficeSrc from "./careerSliderImages/careerOffice.jpg";
import EntertaimentSrc from "./careerSliderImages/careerEntertiment.jpg";
import LearningSrc from "./careerSliderImages/careerLearning.jpg";
import MultisportSrc from "./careerSliderImages/careerMultisport.png";
export const careerSliderData: SliderData = [
  {
    imgSrc: MedicalSrc,
    headerText: "Private medical healthcare",
    descriptionText:
      "Health insurance can covered you for any ups, downs and in-between. The package can be adapted to suit your needs.",
  },
  {
    imgSrc: OfficeSrc,
    headerText: "Cool office",
    descriptionText:
      "Nowadays, the office may vary on your needs. Our stationary place is in the center of Cracow. You are welcome to visit us and decide what type of workspace suits you best.",
  },
  {
    imgSrc: EntertaimentSrc,
    headerText: "Entertainment",
    descriptionText:
      "This term is very broad and we are happy to take from it as much as we can. So, we will be delighted to make space for your favourites to share with our team.",
  },
  {
    imgSrc: LearningSrc,
    headerText: "Never stop learning",
    descriptionText:
      " Together, we’re committed to improve lives of every people being. To achieve that essential goals we are constantly pushing towards boost our skills and expand our knowledge. If you have any question marks, let them find an answers — we belive that every single word can uncover hidden path.",
  },
  {
    imgSrc: MultisportSrc,
    headerText: "Multi-sports packages",
    descriptionText:
      "That's a common knowledge that keeping movement is a key to health lives. We like to live well balanced life and we want to ensure same mind and body set for you.",
  },
];
