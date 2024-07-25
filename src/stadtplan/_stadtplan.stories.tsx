import type { Meta, StoryObj } from "@storybook/react";
import { MenuIntroduction } from ".";
import TopicMapContextProvider from "react-cismap/contexts/TopicMapContextProvider";
import { KompaktanleitungSection } from ".";
import {
  Attribution,
  GenericDigitalTwinReferenceTextComponent,
} from "../commons";
import { wuppertalCollabProjectVersion } from "..";
const meta: Meta = {
  title: "Stadtplan",
};

export default meta;

export const IntroductionMenu: StoryObj = {
  render: () => {
    return (
      <TopicMapContextProvider appKey="storybook-appkey">
        <div>
          <MenuIntroduction />
        </div>
      </TopicMapContextProvider>
    );
  },
};

export const Kompaktanleitung: StoryObj = {
  render: () => {
    const modalBodyStyle = {
      overflowY: "auto",
      overflowX: "hidden",
      maxHeight: "100vh",
    };

    return (
      <div id="myMenu" style={modalBodyStyle}>
        <KompaktanleitungSection />
      </div>
    );
  },
};

export const genericDigitalTwinReferenceTextComponent: StoryObj = {
  render: () => <GenericDigitalTwinReferenceTextComponent />,
};

export const version: StoryObj = {
  render: (args) => <div>{wuppertalCollabProjectVersion}</div>,
};

export const attribution: StoryObj = {
  render: (args) => <Attribution {...args} />,
};
