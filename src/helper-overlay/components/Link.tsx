import { OverlayTourContext } from "./OverlayTourProvider";
import type { OverlayTourContext as OverlayTourContextSettings } from "../helperTypes";
import { useContext } from "react";

interface LinkProps {
  children: JSX.Element;
  target: string;
}

export const Link = ({ children, target }: LinkProps) => {
  const { setSecondaryWithKey } =
    useContext<OverlayTourContextSettings>(OverlayTourContext);
  const showSecondaryWithKeyHandler = (e) => {
    e.stopPropagation();
    setSecondaryWithKey(target);
  };
  return (
    <span onClick={showSecondaryWithKeyHandler} style={{ cursor: "pointer" }}>
      {children}
    </span>
  );
};
