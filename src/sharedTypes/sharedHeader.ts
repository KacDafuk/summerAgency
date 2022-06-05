export type HeaderProps = {
  text: string;
};
export type HeaderPropsWithDescription = HeaderProps & {
  description: string;
  button:
    | false
    | {
        text: string;
        variation: "black" | "white";
        action?: () => void;
      };
  color?: "white";
};
