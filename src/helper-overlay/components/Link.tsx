import { OverlayTourContext } from "./OverlayTourProvider";
import type { OverlayTourContext as OverlayTourContextSettings } from "../helperTypes";
import { useContext } from "react";
import { UIDispatchContext } from "react-cismap/contexts/UIContextProvider";

interface LinkProps {
  children: JSX.Element | string;
  target?: string;
  section?: string;
}

export const Link = ({ children, target, section }: LinkProps) => {
  const { setSecondaryWithKey, showOverlay } =
    useContext<OverlayTourContextSettings>(OverlayTourContext);
  const { setAppMenuActiveMenuSection, setAppMenuVisible } =
    useContext<typeof UIDispatchContext>(UIDispatchContext);

  const showSecondaryWithKeyHandler = (e) => {
    e.stopPropagation();
    if (target) {
      setSecondaryWithKey(target);
    }

    if (section) {
      showOverlay(false);
      setAppMenuVisible(true);
      setAppMenuActiveMenuSection(section);
    }
  };
  return (
    <span
      onClick={showSecondaryWithKeyHandler}
      style={{ cursor: "pointer", color: "#4493F8" }}
    >
      <u>{children}</u>
    </span>
  );
};
