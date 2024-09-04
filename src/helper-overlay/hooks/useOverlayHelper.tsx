import { useState, useLayoutEffect } from "react";

const useOverlayHelper = (
  options = {
    primary: {
      containerPos: "center",
      contentPos: "center",
      contentWidth: "default",
      content: <div></div>,
    },
  }
) => {
  const [ref, setRef] = useState<HTMLElement | null>(null);
  const { containerPos, contentPos, contentWidth, content } = options.primary;
  useLayoutEffect(() => {
    if (!ref) return;

    const config = {
      el: ref,
      content,
      containerPos,
      contentPos,
      contentWidth,
    };
  }, [ref]);

  return setRef;
};

export default useOverlayHelper;
