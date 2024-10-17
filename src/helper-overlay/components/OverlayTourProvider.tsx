import { createContext } from "react";
import type { OverlayTourContext as OverlayTourContextSettings } from "../helperTypes";

export const OverlayTourContext = createContext<OverlayTourContextSettings>({
  setSecondaryWithKey: () => {},
});
