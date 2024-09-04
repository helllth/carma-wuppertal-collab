import { useState, useLayoutEffect } from "react";

export const useOverlayHelper = (
  ref,
  options = {
    primary: {
      containerPos: "center",
      contentPos: "center",
      content: <div></div>,
    },
  }
) => {
  const [config, setConfig] = useState({});
  useLayoutEffect(() => {
    if (!ref) return;

    const { containerPos, contentPos, content } = options.primary;

    const config = {
      el: ref,
      content,
      containerPos,
      contentPos,
    };

    setConfig(config);
  }, [ref]);

  return config;
};
