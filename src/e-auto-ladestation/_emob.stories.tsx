import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { KompaktanleitungSection } from ".";
import { MenuIntroduction, Footer } from ".";
import TopicMapContextProvider from "react-cismap/contexts/TopicMapContextProvider";
import type { CSSProperties } from "react";

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
    const modalBodyStyle: CSSProperties = {
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

export const MenuFooter: StoryObj = {
  render: () => {
    return (
      <Footer
        version="xyz"
        setAppMenuActiveMenuSection={action("setAppMenuActiveMenuSection")}
      />
    );
  },
};
