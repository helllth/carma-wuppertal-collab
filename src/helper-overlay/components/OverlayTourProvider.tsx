import { createContext } from "react";
import type {
  OverlayTourContext as OverlayTourContextSettings,
  OverlayTourProviderProps,
} from "../helperTypes";

export const OverlayTourContext = createContext<OverlayTourContextSettings>({
  setSecondaryWithKey: () => {},
});

export const OverlayTourProvider = ({
  setSecondaryWithKey = () => {},
  children,
}: OverlayTourProviderProps) => {
  return (
    <OverlayTourContext.Provider value={{ setSecondaryWithKey }}>
      {children}
    </OverlayTourContext.Provider>
  );
};
