import { useRef } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { getCollabedHelpComponentConfig, useOverlayHelper } from ".";

const meta: Meta = {
  title: "Helper overlay",
};

export default meta;

export const Menüleiste: StoryObj = {
  render: () => {
    const element = getCollabedHelpComponentConfig("MENULEISTE");
    const elRef = useRef<HTMLDivElement>(null);
    const el = useOverlayHelper(elRef, element);
    return (
      <div>
        <div ref={elRef}>Menüleiste</div>
      </div>
    );
  },
};

export const LayerButtons: StoryObj = {
  render: () => {
    return <div>Text</div>;
  },
};

export const Hintergrund: StoryObj = {
  render: () => {
    return <div>Text</div>;
  },
};

export const Menü: StoryObj = {
  render: () => {
    return <div>Text</div>;
  },
};

export const Zoom: StoryObj = {
  render: () => {
    return <div>Text</div>;
  },
};

export const Vollbild: StoryObj = {
  render: () => {
    return <div>Text</div>;
  },
};

export const MinePosition: StoryObj = {
  render: () => {
    return <div>Text</div>;
  },
};

export const Rathaus: StoryObj = {
  render: () => {
    return <div>Text</div>;
  },
};

export const Messungen: StoryObj = {
  render: () => {
    return <div>Text</div>;
  },
};

export const GazetteerSuche: StoryObj = {
  render: () => {
    return <div>Text</div>;
  },
};
