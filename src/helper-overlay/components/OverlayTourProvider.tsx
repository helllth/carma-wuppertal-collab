import { useState, createContext } from "react";
import type {
  OverlayTourContext as OverlayTourContextSettings,
  OverlayTourProviderProps,
  OverlayHelperConfig,
} from "../helperTypes";

export const OverlayTourContext = createContext<OverlayTourContextSettings>({
  configs: [],
  addConfig: () => {},
  removeConfig: () => {},
  showSecondaryWithKey: null,
  setSecondaryWithKey: () => {},
});

export const OverlayTourProvider = ({ children }: OverlayTourProviderProps) => {
  const [configs, setConfigs] = useState<OverlayHelperConfig[]>([]);
  const [secondaryKey, setSecondaryKey] = useState<null | string>(null);

  const addConfig = (config) => {
    setConfigs((prevConfigs) => [...prevConfigs, config]);
  };

  const removeConfig = (config) => {
    setConfigs((prevConfigs) => prevConfigs.filter((c) => c !== config));
  };

  const setSecondaryKeyHandler = (key: string) => {
    setSecondaryKey(key);
  };

  return (
    <OverlayTourContext.Provider
      value={{
        configs,
        addConfig,
        removeConfig,
        showSecondaryWithKey: secondaryKey,
        setSecondaryWithKey: setSecondaryKeyHandler,
      }}
    >
      {children}
    </OverlayTourContext.Provider>
  );
};
