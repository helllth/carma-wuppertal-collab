import { useState, useLayoutEffect } from "react";

export const useOverlayHelper = (
  options = {
    primary: {
      containerPos: "center",
      contentPos: "center",
      content: <div></div>,
    },
  }
) => {
  const [config, setConfig] = useState<any>();
  useLayoutEffect(() => {
    if (!options?.primary) return;

    if (!config) {
      const { containerPos, contentPos, content } = options.primary;

      const newConfig = {
        content,
        containerPos,
        contentPos,
      };

      setConfig(newConfig);
    }
  }, [options, config]);

  return config;
};
