import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import {
  KompaktanleitungSection,
  MenuTitle,
  MenuIntroduction,
  InfoBoxText,
  SearchTextPlaceholder,
} from ".";
import TopicMapContextProvider from "react-cismap/contexts/TopicMapContextProvider";
import type { CSSProperties } from "react";

const meta: Meta = {
  title: "E-bikes",
};

export default meta;

export const TitleMenu: StoryObj = {
  render: () => {
    return <MenuTitle title="Filter, Einstellungen und Kompaktanleitung" />;
  },
};
export const IntroductionMenu: StoryObj = {
  render: () => {
    return (
      <TopicMapContextProvider appKey="storybook-appkey">
        <div>
          <MenuIntroduction
            setAppMenuActiveMenuSection={action("setAppMenuActiveMenuSection")}
          />
        </div>
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

export const TextInInfoBox: StoryObj = {
  render: () => {
    return <InfoBoxText />;
  },
};

export const TextInSearchPlaceholder: StoryObj = {
  render: () => {
    return <SearchTextPlaceholder />;
  },
};
