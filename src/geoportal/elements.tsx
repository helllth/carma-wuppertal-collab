import type { ElementType } from "../helper-overlay/helperTypes";
import { MeasurementsText } from "./secondary/MeasurementsText";
import { InfoboxText } from "./secondary/InfoboxText";

export const elements: Record<string, ElementType> = {
  menu: {
    key: "MENULEISTE",
    containerPos: "center",
    contentPos: "center",
    content: <div>Menüleiste</div>,
  },
  layerWrapper: {
    key: "LAYERBUTTONS",
    containerPos: "center",
    contentPos: "center",
    content: <div>Layer Buttons</div>,
  },
  hintergrund: {
    key: "HINTERGRUND",
    content: <div>Hintergrund</div>,
    containerPos: "center",
    contentPos: "center",
  },
  modalMenu: {
    key: "MENU",
    containerPos: "center",
    contentPos: "center",
    content: <div>Menü</div>,
  },
  zoomControl: {
    key: "ZOOM",
    content: <div>Zoom</div>,
    containerPos: "center",
    contentPos: "left-center",
  },
  fullScreenControl: {
    key: "VOLLBILD",
    content: <div>Vollbild</div>,
    containerPos: "center",
    contentPos: "left-center",
  },
  navigatorControl: {
    key: "MEINE_POSITION",
    content: <div>Meine Position</div>,
    containerPos: "center",
    contentPos: "left-center",
    contentWidth: "100px",
  },
  homeControl: {
    key: "RATHAUS",
    content: <div>Rathaus</div>,
    containerPos: "center",
    contentPos: "left-center",
  },
  measurementControl: {
    key: "MESSUNGEN",
    content: (
      <div>
        <b>Modus Strecke/Fläche messen</b>
      </div>
    ),
    containerPos: "center",
    contentPos: "left-center",
    contentWidth: "214px",
    secondary: {
      content: <MeasurementsText />,
      secondaryPos: "right",
    },
  },
  gazetteerControl: {
    key: "GAZETTEER_SUCHE",
    content: "Gazetteer Suche",
    containerPos: "center",
    contentPos: "center",
  },
  infoboxControl: {
    key: "INFOBOX",
    content: (
      <div>
        <b>Info-Box</b>
      </div>
    ),
    position: {
      bottom: 0,
      right: 10,
    },
    secondary: {
      content: <InfoboxText />,
      secondaryPos: "left",
    },
  },
};
