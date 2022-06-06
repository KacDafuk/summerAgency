export type SlideDataImg = {
  headerText: string;
  imgSrc: string;
  descriptionText?: string;
};
export type SlideDataQuote = {
  quote: string;
  author: string;
  position: string;
  firm: string;
};
export type SliderData = SlideDataImg[] | SlideDataQuote[];
