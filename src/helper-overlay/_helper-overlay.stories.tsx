import type { Meta, StoryObj } from "@storybook/react";
import { getCollabedHelpComponentConfig, geoElements } from ".";
import { LibHelperOverlay as DisplayContentHelper } from "./components/LibHelperOverlay";
import { useOverlayHelper } from "./hooks/useOverlayHelper";

const meta: Meta = {
  title: "Helper overlay",
};

export default meta;

export const Menüleiste: StoryObj = {
  render: () => {
    const element = getCollabedHelpComponentConfig("MENULEISTE", geoElements);
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
    const element = getCollabedHelpComponentConfig("LAYERBUTTONS", geoElements);
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
    const element = getCollabedHelpComponentConfig("HINTERGRUND", geoElements);
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
    const element = getCollabedHelpComponentConfig("MENU", geoElements);
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
    const element = getCollabedHelpComponentConfig("ZOOM", geoElements);
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
    const element = getCollabedHelpComponentConfig("VOLLBILD", geoElements);
    const config = useOverlayHelper(element);
    return (
      <div>
        <DisplayContentHelper config={config} />
      </div>
    );
  },
};

export const MinePosition: StoryObj = {
  render: () => {
    const element = getCollabedHelpComponentConfig(
      "MINE_POSITION",
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
    const element = getCollabedHelpComponentConfig("RATHAUS", geoElements);
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
    const element = getCollabedHelpComponentConfig("MESSUNGEN", geoElements);
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
    const element = getCollabedHelpComponentConfig(
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
