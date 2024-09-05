import type { Meta, StoryObj } from "@storybook/react";
import { getCollabedHelpComponentConfig, useOverlayHelper } from ".";
import { LibHelperOverlay as DisplayContentHelper } from "./components/LibHelperOverlay";

const meta: Meta = {
  title: "Helper overlay",
};

export default meta;

export const Menüleiste: StoryObj = {
  render: () => {
    const element = getCollabedHelpComponentConfig("MENULEISTE");
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
    const element = getCollabedHelpComponentConfig("LAYERBUTTONS");
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
    const element = getCollabedHelpComponentConfig("HINTERGRUND");
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
    const element = getCollabedHelpComponentConfig("MENU");
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
    const element = getCollabedHelpComponentConfig("ZOOM");
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
    const element = getCollabedHelpComponentConfig("VOLLBILD");
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
    const element = getCollabedHelpComponentConfig("MINE_POSITION");
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
    const element = getCollabedHelpComponentConfig("RATHAUS");
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
    const element = getCollabedHelpComponentConfig("MESSUNGEN");
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
    const element = getCollabedHelpComponentConfig("GAZETTEER_SUCHE");
    const config = useOverlayHelper(element);
    return (
      <div>
        <DisplayContentHelper config={config} />
      </div>
    );
  },
};
