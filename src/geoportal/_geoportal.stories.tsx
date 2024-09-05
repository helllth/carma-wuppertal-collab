import type { Meta, StoryObj } from "@storybook/react";
import TopicMapContextProvider from "react-cismap/contexts/TopicMapContextProvider";
import {
  getCollabedHelpComponentConfig,
  tooltipText,
  searchTextPlaceholder,
  geoElements,
  backgroundSettings,
} from ".";
import {
  getCollabedHelpComponentConfig as getCollabedHelpElementsConfig,
  LibHelperOverlay as DisplayContentHelper,
  useOverlayHelper,
} from "../helper-overlay/index";
import ModalApplicationMenu from "react-cismap/topicmaps/menu/ModalApplicationMenu";

const meta: Meta = {
  title: "Geoportal",
};

export default meta;

export const KompletterModalerDialog: StoryObj = {
  render: () => {
    const versionString = "xyz";
    return (
      <TopicMapContextProvider appKey="storybook-appkey">
        <ModalApplicationMenu
          {...getCollabedHelpComponentConfig({
            versionString,
          })}
          visible={true}
        />
      </TopicMapContextProvider>
    );
  },
};

export const TextInSearchPlaceholder: StoryObj = {
  render: () => {
    return <div>{searchTextPlaceholder}</div>;
  },
};

export const TextTooltip: StoryObj = {
  render: () => {
    return <div>{tooltipText}</div>;
  },
};

export const Menüleiste: StoryObj = {
  render: () => {
    const element = getCollabedHelpElementsConfig("MENULEISTE", geoElements);
    const config = useOverlayHelper(element);
    return (
      <div>
        <DisplayContentHelper config={config} />
      </div>
    );
  },
};

export const LayerButtons: StoryObj = {
  render: () => {
    const element = getCollabedHelpElementsConfig("LAYERBUTTONS", geoElements);
    const config = useOverlayHelper(element);
    return (
      <div>
        <DisplayContentHelper config={config} />
      </div>
    );
  },
};

export const Hintergrund: StoryObj = {
  render: () => {
    const element = getCollabedHelpElementsConfig("HINTERGRUND", geoElements);
    const config = useOverlayHelper(element);
    return (
      <div>
        <DisplayContentHelper config={config} />
      </div>
    );
  },
};

export const Menü: StoryObj = {
  render: () => {
    const element = getCollabedHelpElementsConfig("MENU", geoElements);
    const config = useOverlayHelper(element);
    return (
      <div>
        <DisplayContentHelper config={config} />
      </div>
    );
  },
};

export const Zoom: StoryObj = {
  render: () => {
    const element = getCollabedHelpElementsConfig("ZOOM", geoElements);
    const config = useOverlayHelper(element);
    return (
      <div>
        <DisplayContentHelper config={config} />
      </div>
    );
  },
};

export const Vollbild: StoryObj = {
  render: () => {
    const element = getCollabedHelpElementsConfig("VOLLBILD", geoElements);
    const config = useOverlayHelper(element);
    return (
      <div>
        <DisplayContentHelper config={config} />
      </div>
    );
  },
};

export const MeinePosition: StoryObj = {
  render: () => {
    const element = getCollabedHelpElementsConfig(
      "MEINE_POSITION",
      geoElements
    );
    const config = useOverlayHelper(element);
    return (
      <div>
        <DisplayContentHelper config={config} />
      </div>
    );
  },
};

export const Rathaus: StoryObj = {
  render: () => {
    const element = getCollabedHelpElementsConfig("RATHAUS", geoElements);
    const config = useOverlayHelper(element);
    return (
      <div>
        <DisplayContentHelper config={config} />
      </div>
    );
  },
};

export const Messungen: StoryObj = {
  render: () => {
    const element = getCollabedHelpElementsConfig("MESSUNGEN", geoElements);
    const config = useOverlayHelper(element);
    return (
      <div>
        <DisplayContentHelper config={config} />
      </div>
    );
  },
};

export const GazetteerSuche: StoryObj = {
  render: () => {
    const element = getCollabedHelpElementsConfig(
      "GAZETTEER_SUCHE",
      geoElements
    );
    const config = useOverlayHelper(element);
    return (
      <div>
        <DisplayContentHelper config={config} />
      </div>
    );
  },
};

export const Background: StoryObj = {
  render: () => {
    const { transparency, color } = backgroundSettings;
    return (
      <div
        style={{
          width: "100%",
          height: "90vh",
          backgroundColor: color,
          opacity: transparency,
        }}
      ></div>
    );
  },
};
