export const elements = {
  menuTour: {
    key: "MENULEISTE",
    containerPos: "center",
    contentPos: "center",
    content: <div>Menüleiste</div>,
  },
  layerWrapperTourRef: {
    message: "LAYERBUTTONS",
    options: {
      containerPos: "center",
      contentPos: "center",
      content: <div>Layer Buttons</div>,
    },
  },
  hintergrundTour: {
    key: "HINTERGRUND",
    conetn: <div>Hintergrund</div>,
    containerPos: "center",
    contentPos: "center",
  },
  modalMenuTourRef: {
    key: "MENU",
    containerPos: "center",
    contentPos: "center",
    message: <div>Menü</div>,
  },
  zoomControlTour: {
    key: "ZOOM",
    content: <div>Zoom</div>,
    containerPos: "center",
    contentPos: "left-center",
  },
  fullScreenControlTour: {
    key: "VOLLBILD",
    conten: <div>Vollbild</div>,
    containerPos: "center",
    contentPos: "left-center",
  },
  navigatorControlTour: {
    key: "MINE_POSITION",
    content: <div>Mine Position</div>,
    containerPos: "center",
    contentPos: "left-center",
  },
  homeControlTour: {
    key: "RATHAUS",
    content: <div>Rathaus</div>,
    containerPos: "center",
    contentPos: "left-center",
  },
  measurementControlTour: {
    key: "MESSUNGEN",
    content: <div>Messungen</div>,
    containerPos: "center",
    contentPos: "left-center",
  },
  gazetteerControlTour: {
    key: "GAZETTEER_SUCHE",
    content: "Gazetteer Suche",
    containerPos: "center",
    contentPos: "center",
  },
};

export const getCollabedHelpComponentConfig = (key) => {
  if (key === "LAYERBUTTONS") {
    return {
      primary: {
        contentPos: "UPPER",
        content: <div>Layer Buttons</div>,
      },
      // secondary: {content: <Popover>Lsdlkgjlksdjkldfjlkgfdjayer Buttons</Popover>},
    };
  }
  return undefined;
};
