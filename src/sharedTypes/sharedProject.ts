export type Technologies =
  | "HARDWARE"
  | "DESIGN"
  | "UI/UX"
  | "IOS"
  | "ANDROID"
  | "WEB"
  | "ALL";
export type ProjectProps = {
  h1Text: string;
  h2Text: string;
  text: string;
  technologies: Technologies[];
  backgroundUrl: string;
  action?: () => void;
};
