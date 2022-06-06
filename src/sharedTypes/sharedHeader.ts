export type HeaderProps = {
  text: string;
};
type FontSizes =
  | "--font-sm"
  | "--font-x-sm"
  | "--font-md"
  | "--font-x-md"
  | "--font-lg"
  | "--font-x-lg"
  | "--font-xx-lg";
export type HeaderPropsWithDescription = HeaderProps & {
  description: string;
  counter?: number;
  fontSizeH2?: FontSizes;
  fontSizeDescription?: FontSizes;
  carouselHeader?: true;
  color?: "white";
  button?: {
    text: string;
    variation: "black" | "white";
    action?: () => void;
  };
};
