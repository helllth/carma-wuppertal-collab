import { useEffect, useState } from "react";

export function LibHelperOverlay({
  config,
  transparency = 0.8,
  color = "white",
}) {
  const [hightlightRects, setHightlightRects] = useState<any>(null);

  useEffect(() => {
    if (config) {
      const { content, containerPos, contentPos } = config;
      const pos = getContainerPosition(containerPos);
      const contPos = getElementPosition(contentPos);
      setHightlightRects({
        pos,
        contPos,
        content,
      });
    }
  }, [config]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        zIndex: 1000,
        width: "100vw",
        height: "100vh",
        background: color,
        opacity: transparency,
      }}
    >
      <div
        style={{
          marginTop: "1rem",
        }}
      >
        <span>{hightlightRects ? hightlightRects.content : ""}</span>
      </div>
    </div>
  );
}

export function getContainerPosition(alignment) {
  let styleElement: { [key: string]: string } = {};
  switch (alignment) {
    case "center":
      styleElement.transform = "translate(0, 0)";
      break;
    case "top":
      styleElement.transform = "translate(0, -100%)";
      break;
    case "left":
      styleElement.transform = "translate(-100%, 0)";
      break;
    case "right":
      styleElement.transform = "translate(100%, 0)";
      break;
    case "bottom":
      styleElement.transform = "translate(0, 100%)";
      break;
    default:
      console.log("yyy element position");
  }

  return styleElement;
}

export function getElementPosition(alignment) {
  let styleElement: { [key: string]: string | number } = {};
  switch (alignment) {
    case "center":
      styleElement.top = "50%";
      styleElement.left = "50%";
      styleElement.transform = "translate(-50%, -50%)";
      break;
    case "top-center":
      styleElement.top = 0;
      styleElement.transform = "translate(50%, 0)";
      break;
    case "top-right":
      styleElement.top = 0;
      styleElement.right = 0;
      break;
    case "top-left":
      styleElement.top = 0;
      styleElement.left = 0;
      break;
    case "left-center":
      styleElement.top = "50%";
      styleElement.transform = "translate(0, -50%)";
      styleElement.left = 0;
      break;
    case "left-top":
      styleElement.top = 0;
      styleElement.left = 0;
      break;
    case "left-bottom":
      styleElement.bottom = 0;
      styleElement.left = 0;
      break;
    case "right-center":
      styleElement.top = "50%";
      styleElement.transform = "translate(0, -50%)";
      styleElement.right = 0;
      break;
    case "right-top":
      styleElement.top = 0;
      styleElement.right = 0;
      break;
    case "right-bottom":
      styleElement.bottom = 0;
      styleElement.right = 0;
      break;
    case "bottom-center":
      styleElement.bottom = 0;
      styleElement.transform = "translate(50%, 0)";
      break;
    case "bottom-right":
      styleElement.bottom = 0;
      styleElement.right = 0;
      break;
    case "bottom-left":
      styleElement.bottom = 0;
      styleElement.left = 0;
      break;
    default:
      console.log("yyy content position");
  }

  return styleElement;
}
