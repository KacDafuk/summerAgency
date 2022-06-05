export type HeaderProps = {
  text: string;
};
type FontSizes =
  | "--font-sm"
  | "--font-x-sm"
  | "--font-md"
  | "--font-x-md"
  | "--font-lg"
  | "--font-x-lg";
export type HeaderPropsWithDescription = HeaderProps & {
  description: string;
  fontSizeH2?: FontSizes;
  fontSizeDescription?: FontSizes;
  color?: "white";
  button?: {
    text: string;
    variation: "black" | "white";
    action?: () => void;
  };
};
