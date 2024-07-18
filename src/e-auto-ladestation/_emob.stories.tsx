import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { KompaktanleitungSection } from ".";
import { MenuFooter } from ".";
import { MenuIntroduction } from ".";
import TopicMapContextProvider from "react-cismap/contexts/TopicMapContextProvider";

const meta: Meta = {
  title: "E-Auto Ladestationskarte",
};

export default meta;

export const MenuEinleitung: StoryObj = {
  render: () => {
    return (
      <TopicMapContextProvider appKey="storybook-appkey">
        <MenuIntroduction
          setAppMenuActiveMenuSection={action("setAppMenuActiveMenuSection")}
        />
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

export const MenuFußzeile: StoryObj = {
  render: () => {
    return (
      <TopicMapContextProvider appKey="storybook-appkey">
        <MenuFooter />
      </TopicMapContextProvider>
    );
  },
};
