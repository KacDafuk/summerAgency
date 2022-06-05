export type Technologies =
  | "HARDWARE"
  | "DESIGN"
  | "UI/UX"
  | "IOS"
  | "ANDROID"
  | "WEB";
export type ProjectProps = {
  h1Text: string;
  h2Text: string;
  text: string;
  technologies: Technologies[];
  backgroundUrl: string;
  action?: () => void;
};
